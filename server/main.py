from flask import Flask
from flask_cors import CORS

from .src.visits import visits

app = Flask(__name__)
CORS(app)
app.register_blueprint(visits)

@app.route("/api/hello")
def hello():
    return "Hello World!"
