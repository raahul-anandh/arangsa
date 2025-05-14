from ..core.config import get_db
from ..models.form import Form
from uuid import uuid4
from datetime import datetime, timezone

db = get_db()

async def create_form(user_id: str) -> str:
    # Generate unique formId
    form_id = str(uuid4())
    
    # Create form document
    form_document = {
        "formId": form_id,
        "createdAt": datetime.now(timezone.utc),
        "owner": user_id,
        "perspectives": [],
    }
    
    # Insert the document into the database
    result = await db.forms.insert_one(form_document)
    
    # Return the generated formId
    return form_id
