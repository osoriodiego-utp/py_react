import sqlite3
DATABASE = "database.db"


def get_database():
    conn = sqlite3.connect(DATABASE)
    return conn


def create_tables():
    tables = [
        """
        CREATE TABLE IF NOT EXISTS company(
            CompanyId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            Name NVARCHAR(50) NOT NULL,
            Address NVARCHAR(100) NOT NULL,
            Nit NVARCHAR(10) NOT NULL,
            Phone NVARCHAR(15) NOT NULL
        )
        """
    ]

    database = get_database()
    cursor = database.cursor()
    for table in tables:
        cursor.execute(table)
