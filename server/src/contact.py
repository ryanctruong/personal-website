from uuid import UUID

import psycopg
from flask import Blueprint, current_app, request

from .db import connect_postgres
from .visits import VISITOR_COOKIE

contact = Blueprint("contact", __name__)

@contact.post("/api/contact")
def submit_contact():
    request.max_content_length = 32 * 1024
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return {"error": "Send a JSON object with your contact details."}, 400

    values = {}
    for field, limit in (
        ("full_name", 120),
        ("email_address", 254),
        ("company", 120),
        ("contact_message", 4000),
    ):
        value = data.get(field, "")
        if not isinstance(value, str):
            return {"error": "Enter valid contact details."}, 400
        value = value.strip()
        if len(value) > limit or any(
            character == "\x00" or 0xD800 <= ord(character) <= 0xDFFF
            for character in value
        ):
            return {"error": "Check the length and content of each field."}, 400
        if field != "company" and not value:
            return {"error": "Enter your name, email, and message."}, 400
        values[field] = value or None

    email = values["email_address"]
    local, _, domain = email.partition("@")
    if not local or not domain or "@" in domain or any(char.isspace() for char in email):
        return {"error": "Enter a valid email address."}, 400

    try:
        visitor_id = UUID(request.cookies.get(VISITOR_COOKIE, ""))
    except ValueError:
        visitor_id = None

    try:
        with connect_postgres() as connection:
            connection.execute(
                """
                INSERT INTO public.contact_submissions
                    (visitor_id, full_name, email_address, company, contact_message)
                VALUES (
                    (SELECT visitor_id FROM public.site_visitors
                     WHERE visitor_id = %(visitor_id)s FOR KEY SHARE),
                    %(full_name)s, %(email_address)s, %(company)s, %(contact_message)s
                )
                """,
                {**values, "visitor_id": visitor_id},
            )
    except (KeyError, psycopg.Error):
        current_app.logger.error("Could not save contact submission.")
        return {"error": "Your message could not be saved. Please try again."}, 503

    return "", 201
