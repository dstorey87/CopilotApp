# backend/src/api/trends.py
from fastapi import APIRouter, HTTPException
from src.utils.logging import emit_log
from src.utils.error_handler import handle_http_exception
from src.api.schemas import TrendActionRequest  # Absolute import

router = APIRouter()

@router.get("")  # Route without trailing slash
async def get_trends():
    emit_log("Fetching trend data")
    return {"trends": ["Trend1", "Trend2"]}

@router.post("/approve")
async def approve_trend(request: TrendActionRequest):
    emit_log(f"Approving trend: {request.trend_id}")
    if not request.trend_id:
        return handle_http_exception(HTTPException(status_code=422, detail="Trend ID is required"))
    return {"message": "Trend approved"}

@router.post("/deny")
async def deny_trend(request: TrendActionRequest):
    emit_log(f"Denying trend: {request.trend_id}")
    if not request.trend_id:
        return handle_http_exception(HTTPException(status_code=422, detail="Trend ID is required"))
    return {"message": "Trend denied"}