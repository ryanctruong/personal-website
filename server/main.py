from flask import Flask
from flask_cors import CORS

if __package__:
    from .src.db import check_neon
    from .src.visits import visits
else:
    from src.db import check_neon
    from src.visits import visits

app = Flask(__name__)
CORS(app)
app.cli.add_command(check_neon)
app.register_blueprint(visits)

@app.route("/api/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, port=8080)