import sqlite3
from config import DATABASE_PATH

connection = sqlite3.connect(DATABASE_PATH)

cursor = connection.cursor()

cursor.execute("""
    SELECT name
    FROM sqlite_master
    WHERE type = 'table'
    ORDER BY name
""")

tables = cursor.fetchall()

print("Database tables:")

for table in tables:
    print(table[0])

connection.close()