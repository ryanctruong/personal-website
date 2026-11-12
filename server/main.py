from flask import Flask
from flask_cors import CORS

from .src.visits import visits

app = Flask(__name__)
CORS(app)
app.register_blueprint(visits)

@app.get("/api/health")
def health():
    return {"status": "ok"}
