from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from models import Base

class User(Base):
    __tablename__ = 'users'

    username: Mapped[str] = mapped_column(String)
    first_name: Mapped[str] = mapped_column(String)
    middle_name: Mapped[str|None] = mapped_column(String, nullable=True)
    last_name: Mapped[str] = mapped_column(String)
    email: Mapped[str] = mapped_column(String)
    password: Mapped[str] = mapped_column(String)
    disabled: Mapped[bool] = mapped_column(Boolean)

    def __repr__(self) -> str:
        return f'<User {self.username}>'
