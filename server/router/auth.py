from fastapi import APIRouter
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError

from database import Database
from models.User import User

router = APIRouter()
database = Database()

@router.post("/login")
async def login(username: str, password: str):

    query = select(User).where(User.username == username).where(User.password == password)
    user = database.session.execute(query).scalars().first()
    
    if user:
        return {"message": "Login successful"}
    
    return {"message": "Login failed"}

@router.post("/signup")
async def signup(username: str, first_name: str, middle_name: str, last_name: str, email: str, password: str):
    new_user = User(
        username=username,
        first_name=first_name,
        middle_name=middle_name,
        last_name=last_name,
        email=email,
        password=password,
        disabled=False
    )
    
    try:
        database.session.add(new_user)
        database.session.commit()
        return {"message": "Signup successful"}
    except IntegrityError:
        database.session.rollback()
        return {"message": "Signup failed: User already exists"}
