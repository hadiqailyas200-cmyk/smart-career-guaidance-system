from flask import Blueprint, request, jsonify
import sqlite3
import json

from config import DATABASE_PATH


assessment_bp = Blueprint("assessment", __name__)


def get_db_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


@assessment_bp.route("/api/assessment", methods=["POST"])
def save_assessment():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "No assessment data received."
        }), 400

    field = data.get("field")
    education_level = data.get("educationLevel")
    study_program = data.get("studyProgram")
    academic_performance = data.get("academicPerformance")
    current_status = data.get("currentStatus")

    interests = data.get("interests")
    skills = data.get("skills")

    career_preferences = data.get("careerPreferences")
    career_direction = data.get("careerDirection")

    if not all([
        field,
        education_level,
        study_program,
        academic_performance,
        current_status,
        interests,
        skills,
        career_preferences,
        career_direction
    ]):
        return jsonify({
            "success": False,
            "message": "All assessment fields are required."
        }), 400

    user_id = 1

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO assessments (
            user_id,
            field,
            education_level,
            study_program,
            academic_performance,
            current_status,
            interests,
            skills,
            career_preferences,
            career_direction,
            completed
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            user_id,
            field,
            education_level,
            study_program,
            academic_performance,
            current_status,
            json.dumps(interests),
            json.dumps(skills),
            json.dumps(career_preferences),
            json.dumps(career_direction),
            1
        )
    )

    connection.commit()

    assessment_id = cursor.lastrowid

    connection.close()

    return jsonify({
        "success": True,
        "message": "Assessment saved successfully.",
        "assessment_id": assessment_id
    }), 201