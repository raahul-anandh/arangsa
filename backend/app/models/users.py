# backend/models/user.py
from pydantic import BaseModel, EmailStr, Optional
from datetime import datetime

class User(BaseModel):
    google_id: str
    name: str
    email: EmailStr
    picture: Optional[str] = None  # Optional field for the profile picture
    created_at: datetime