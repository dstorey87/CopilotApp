# backend/src/api/schemas.py
from pydantic import BaseModel

class TrendActionRequest(BaseModel):
    trend_id: int