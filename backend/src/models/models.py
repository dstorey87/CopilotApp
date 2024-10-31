# backend/src/api/models.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.utils.logging import emit_log
from src.utils.error_handler import handle_http_exception

router = APIRouter()

class ModelRequest(BaseModel):
    model: str

selected_model = "default_model"

@router.post("")  # Route without trailing slash
async def switch_model(request: ModelRequest):
    global selected_model
    emit_log(f"Received request to switch model to: {request.model}")
    if not request.model:
        emit_log("Model is required")
        return handle_http_exception(HTTPException(status_code=422, detail="Model is required"))
    selected_model = request.model
    emit_log(f"Switched to model: {request.model}")
    return {"message": f"Switched to model: {request.model}"}