FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt ./
RUN python -m pip install --no-cache-dir -r requirements.txt

COPY main.py ./
COPY src/ ./src/

USER 10001
EXPOSE 8080
CMD ["sh", "-c", "exec gunicorn --bind \"0.0.0.0:${PORT:-8080}\" main:app"]
