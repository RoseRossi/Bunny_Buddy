from fastapi import FastAPI
from router import Router

app = FastAPI()
router = Router(app)
