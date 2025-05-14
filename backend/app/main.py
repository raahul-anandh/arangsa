from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import form

app = FastAPI()

# 👇 Add this part to enable CORS for frontend on port 3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from Arangsa!"}

# Include the form routes
app.include_router(form.router)

