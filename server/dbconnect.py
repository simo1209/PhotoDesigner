import MySQLdb

def connection():
    conn = MySQLdb.connect(
        host="localhost",
        user="root",
        passwd="kris12:)",
        db="hacktues"
    )
    c = conn.cursor()
    return c, conn
