from sqlalchemy import create_engine as sa_create_engine, URL

def create_engine():
    url_object = URL.create(
        "postgresql",
        username="postgres",
        password="postgres",  # plain (unescaped) text
        host="database",
        database="bunnybuddy",
    )

    return sa_create_engine(url_object)
