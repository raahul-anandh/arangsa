import os
import jwt
import httpx
from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from datetime import timezone, datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
REDIRECT_URI = "http://localhost:8000/auth/google/callback"
JWT_SECRET = os.getenv("JWT_SECRET")

@app.get("/auth/google")
async def google_login():
    google_oauth_url = (
        "https://accounts.google.com/o/oauth2/v2/auth"
        f"?client_id={GOOGLE_CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        "&response_type=code"
        "&scope=openid%20email%20profile"
        "&access_type=offline"
        "&prompt=consent"
    )
    return RedirectResponse(google_oauth_url)

@app.get("/auth/google/callback")
async def google_callback(request: Request):
    code = request.query_params.get("code")
    print(GOOGLE_CLIENT_SECRET)

    # 1. Exchange code for token
    async with httpx.AsyncClient() as client:
        token_res = await client.post("https://oauth2.googleapis.com/token", data={
            "code": code,
            "client_id": GOOGLE_CLIENT_ID,
            "client_secret": GOOGLE_CLIENT_SECRET,
            "redirect_uri": REDIRECT_URI,
            "grant_type": "authorization_code",
        })
    token_data = token_res.json()
    access_token = token_data.get("access_token")
    print(token_data)

    # 2. Get user info
    async with httpx.AsyncClient() as client:
        userinfo_res = await client.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            headers={"Authorization": f"Bearer {access_token}"}
        )
    userinfo = userinfo_res.json()

    print(userinfo)

    # 3. Generate JWT
    payload = {
        "sub": userinfo["email"],
        "name": userinfo["name"],
        "picture": userinfo["picture"],
        "exp": datetime.now(timezone.utc) + timedelta(hours=1),  # expires in 1 hour
    }
    print("hi")
    jwt_token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
    print("bye")
    print(payload)

    # 4. Redirect to frontend with token
    redirect_url = f"http://localhost:3000/login-success?token={jwt_token}"

    return RedirectResponse(url=redirect_url)
