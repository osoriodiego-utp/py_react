from database import get_database


# insert_game
def Create_company(name, address, nit, phone):
    database = get_database()
    cursor = database.cursor()
    statement = "INSERT INTO company(name, address, nit, phone) VALUES (?, ?, ?, ?)"
    cursor.execute(statement, [name, address, nit, phone])
    database.commit()
    return True


def Update_company(id, name, address, nit, phone):
    database = get_database()
    cursor = database.cursor()
    statement = "UPDATE company SET name = ?, address = ?, nit = ?, phone = ? WHERE id = ?"
    cursor.execute(statement, [name, address, nit, phone, id])
    database.commit()
    return True


def Delete_company(id):
    database = get_database()
    cursor = database.cursor()
    statement = "DELETE FROM company WHERE id = ?"
    cursor.execute(statement, [id])
    database.commit()
    return True


def Get_by_id(id):
    database = get_database()
    cursor = database.cursor()
    statement = "SELECT id, name, address, nit, phone FROM company WHERE id = ?"
    cursor.execute(statement, [id])
    database.commit()
    return cursor.fetchone()


def Get_companies():
    database = get_database()
    cursor = database.cursor()
    statement = "SELECT id, name, address, nit, phone FROM company"
    cursor.execute(statement)
    response = cursor.fetchall()

    result = []

    for row in response:
        result.append({
            "id": row[0],
            "name": row[1],
            "address": row[2],
            "nit": row[3],
            "phone": row[4]
        })

    return result
