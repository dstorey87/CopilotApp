from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.utils.logging import emit_log
from src.utils.error_handler import handle_http_exception

router = APIRouter()

class GenerateRequest(BaseModel):
    prompt: str

@router.post("/generate")
async def generate_content(request: GenerateRequest):
    emit_log(f"Generating content for prompt: {request.prompt}")
    if not request.prompt:
        return handle_http_exception(HTTPException(status_code=422, detail="Prompt is required"))
    return {"message": "Generated content"}