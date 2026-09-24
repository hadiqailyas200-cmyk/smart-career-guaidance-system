import sqlite3

from config import DATABASE_PATH


connection = sqlite3.connect(DATABASE_PATH)

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    field TEXT NOT NULL,
    education_level TEXT NOT NULL,
    study_program TEXT NOT NULL,
    academic_performance TEXT NOT NULL,
    current_status TEXT NOT NULL,
    interests TEXT NOT NULL,
    skills TEXT NOT NULL,
    career_preferences TEXT NOT NULL,
    career_direction TEXT NOT NULL,
    completed INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
""")

connection.commit()
connection.close()

print("Assessments table created successfully!")
