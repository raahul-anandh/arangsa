# routes/auth.py
from fastapi import APIRouter, HTTPException
from ..models.user import User
from services.auth_service import google_authenticate

router = APIRouter()

@router.post("/auth/google")
def google_login(token: str):
    return google_authenticate(token)