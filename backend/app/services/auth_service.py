# services/auth_service.py
import jwt
from google.oauth2 import id_token
from google.auth.transport import requests
from core.config import GOOGLE_CLIENT_ID, JWT_SECRET, MONGO_URI
from datetime import datetime, timezone, timedelta
from models.user import User
import pymongo

# MongoDB setup
mongo_client = pymongo.MongoClient(MONGO_URI)
db = mongo_client["arangsa_db"]
users_collection = db["users"]

def google_authenticate(token: str):
    try:
        # Step 1: Verify the Google ID token
        idinfo = id_token.verify_oauth2_token(
            token, requests.Request(), GOOGLE_CLIENT_ID
        )
        
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise HTTPException(status_code=400, detail="Wrong issuer.")

        # Step 2: Extract user information
        user_email = idinfo['email']
        user_name = idinfo.get('name')
        user_picture = idinfo.get('picture')

        # Step 3: Check if user exists in MongoDB
        user = users_collection.find_one({"email": user_email})

        if not user:
            # Step 4: Create new user if not exists
            user = {
                "email": user_email,
                "name": user_name,
                "picture": user_picture,
                "createdAt": datetime.now(timezone.utc)
            }
            users_collection.insert_one(user)

        # Step 5: Generate a custom JWT token
        payload = {
            "email": user_email,
            "exp": datetime.now(timezone.utc) + timedelta(days=7)  # Expires in 7 days
        }
        my_jwt = jwt.encode(payload, JWT_SECRET, algorithm="HS256")

        return {"access_token": my_jwt}
    
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid Token")
