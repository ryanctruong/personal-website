import os
from uuid import UUID, uuid4

import psycopg
from flask import Blueprint, current_app, make_response, request

from .db import connect_postgres

visits = Blueprint("visits", __name__)
VISITOR_COOKIE = "visitor_id"

@visits.post("/api/visit")
def record_visit():
    try:
        visitor_id = UUID(request.cookies.get(VISITOR_COOKIE, ""))
        new_visitor = False
    except ValueError:
        visitor_id = uuid4()
        new_visitor = True

    try:
        with connect_postgres() as connection:
            connection.execute(
                """
                INSERT INTO public.site_visitors AS visitors (visitor_id)
                VALUES (%s)
                ON CONFLICT (visitor_id) DO UPDATE
                SET last_seen_at = GREATEST(visitors.last_seen_at, EXCLUDED.last_seen_at)
                """,
                (visitor_id,),
            )
    except (KeyError, psycopg.Error):
        current_app.logger.error("Could not record site visit.")
        return "", 503

    response = make_response("", 204)
    response.headers["Cache-Control"] = "no-store"
    if new_visitor:
        response.set_cookie(
            VISITOR_COOKIE,
            str(visitor_id),
            max_age=365 * 24 * 60 * 60,
            httponly=True,
            secure=request.is_secure or bool(os.environ.get("K_SERVICE")),
            samesite="Lax",
        )
    return response
