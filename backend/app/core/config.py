from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI
import os
import urllib.parse
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
JWT_SECRET = os.getenv("JWT_SECRET")

client = AsyncIOMotorClient(MONGO_URI)
db = client.formDatabase # It will automatically use the database specified in the URI

def get_db():
    return db
