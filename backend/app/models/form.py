from pydantic import BaseModel
from typing import List

class Perspective(BaseModel):
    perspectiveId: str
    perspectiveDescription: str
    votes: int

class Form(BaseModel):
    formId: str
    createdAt: str
    owner: str
    perspectives: List[Perspective]  # An empty list initially
