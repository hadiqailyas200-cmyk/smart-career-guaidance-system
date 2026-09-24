from flask import Blueprint, request, jsonify
import sqlite3
from werkzeug.security import generate_password_hash
from config import DATABASE_PATH


auth_bp = Blueprint("auth", __name__)


def get_db_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


@auth_bp.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "success": False,
            "message": "Name, email and password are required."
        }), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT id FROM users WHERE email = ?",
        (email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        connection.close()
        return jsonify({
            "success": False,
            "message": "Email already registered."
        }), 409

    hashed_password = generate_password_hash(password)

    cursor.execute(
        """
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
        """,
        (name, email, hashed_password)
    )

    connection.commit()
    connection.close()

    return jsonify({
        "success": True,
        "message": "Account created successfully."
    }), 201
@auth_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "success": False,
            "message": "Email and password are required."
        }), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT id, name, email, password FROM users WHERE email = ?",
        (email,)
    )

    user = cursor.fetchone()
    connection.close()

    if not user:
        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    from werkzeug.security import check_password_hash

    if not check_password_hash(user["password"], password):
        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    return jsonify({
        "success": True,
        "message": "Login successful.",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }), 200
@auth_bp.route("/api/profile", methods=["PUT"])
def update_profile():

    data = request.get_json()

    user_id = data.get("userId")
    name = data.get("name")

    if not user_id or not name:
        return jsonify({
            "success": False,
            "message": "User ID and name are required."
        }), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT id FROM users WHERE id = ?",
        (user_id,)
    )

    user = cursor.fetchone()

    if not user:
        connection.close()
        return jsonify({
            "success": False,
            "message": "User not found."
        }), 404

    cursor.execute(
        """
        UPDATE users
        SET name = ?
        WHERE id = ?
        """,
        (name, user_id)
    )

    connection.commit()
    connection.close()

    return jsonify({
        "success": True,
        "message": "Profile updated successfully.",
        "name": name
    }), 200