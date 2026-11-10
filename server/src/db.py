import os
from pathlib import Path

import psycopg
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / "neon" / ".env.local")

def connect_postgres():
    return psycopg.connect(
        os.environ["DATABASE_URL"], connect_timeout=10, prepare_threshold=None
    )
