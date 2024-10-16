from sqlalchemy import Integer, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    created_at: Mapped[str] = mapped_column(String, default='now()')
    updated_at: Mapped[str] = mapped_column(String, default='now()', onupdate='now()')
    disabled_at: Mapped[str|None] = mapped_column(String, nullable=True)
    deleted_at: Mapped[str|None] = mapped_column(String, nullable=True)
