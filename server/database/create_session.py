from sqlalchemy.orm import Session

def create_session(engine) -> Session:
    session = Session(engine)
    return session
