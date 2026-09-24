from flask import Flask
import sqlite3
from config import DATABASE_PATH
from flask_cors import CORS
from routes.auth import auth_bp
from routes.assessment import assessment_bp
from routes.prediction import prediction_bp
from routes.skill_gap import skill_gap_bp
app = Flask(__name__)
CORS(app)
app.register_blueprint(auth_bp)
app.register_blueprint(assessment_bp)
app.register_blueprint(prediction_bp)
app.register_blueprint(skill_gap_bp)

def get_db_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


@app.route("/")
def home():
    return "Smart Career Guidance Backend is Running!"


@app.route("/test-db")
def test_database():
    connection = get_db_connection()

    cursor = connection.cursor()
    cursor.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='users'"
    )

    table = cursor.fetchone()
    connection.close()

    if table:
        return "Database connected successfully! Users table found."
    else:
        return "Database connected, but users table was not found."


if __name__ == "__main__":
    app.run(debug=True)