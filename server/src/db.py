import os
from contextlib import closing
from pathlib import Path

import boto3
import click
import psycopg
from botocore.config import Config
from botocore.exceptions import BotoCoreError, ClientError
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / "neon" / ".env.local")

def connect_postgres():
    return psycopg.connect(
        os.environ["DATABASE_URL"], connect_timeout=10, prepare_threshold=None
    )

def neon_storage_client():
    return boto3.client(
        "s3",
        endpoint_url=os.environ["AWS_ENDPOINT_URL_S3"],
        region_name=os.environ["AWS_REGION"],
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
        config=Config(signature_version="s3v4", s3={"addressing_style": "path"}),
    )

@click.command("check-neon")
def check_neon():
    """Verify access to Postgres and the private assets bucket."""
    try:
        with connect_postgres() as connection:
            connection.execute("SELECT 1").fetchone()
    except KeyError as error:
        raise click.ClickException(f"Missing environment variable {error.args[0]}.") from None
    except psycopg.Error:
        raise click.ClickException("Neon Postgres connection check failed.") from None
    click.echo("Neon Postgres connection verified.")

    try:
        with closing(neon_storage_client()) as storage:
            storage.head_bucket(Bucket="assets")
    except KeyError as error:
        raise click.ClickException(f"Missing environment variable {error.args[0]}.") from None
    except (BotoCoreError, ClientError, ValueError):
        raise click.ClickException("Neon Object Storage access check failed.") from None
    click.echo("Neon Object Storage access verified.")
