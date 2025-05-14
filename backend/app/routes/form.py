from fastapi import APIRouter, HTTPException
from ..services.form_service import create_form
from pydantic import BaseModel

router = APIRouter()

class FormRequest(BaseModel):
    userId: str

@router.post("/create-form")
async def create_form_endpoint(request: FormRequest):
    try:
        form_id = await create_form(request.userId)
        return {"formId": form_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
