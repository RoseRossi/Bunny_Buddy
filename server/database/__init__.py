from database.create_engine import create_engine
from database.create_session import create_session

from models import Base

class Database:
    def __init__(self):
        self.engine = create_engine()
        self.connection = self.engine.connect()
        self.session = create_session(self.engine)
        self.setup_database()

    def setup_database(self):
        from models import User
        Base.metadata.create_all(bind=self.engine)
