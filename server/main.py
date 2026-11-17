from flask import Flask
from flask_cors import CORS

from .src.contact import contact
from .src.visits import visits

app = Flask(__name__)
CORS(app)
app.register_blueprint(visits)
app.register_blueprint(contact)

@app.get("/api/health")
def health():
    return {"status": "ok"}
