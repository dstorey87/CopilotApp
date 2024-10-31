# backend/src/utils/error_handler.py
import logging
from fastapi import HTTPException

logger = logging.getLogger(__name__)

def log_error(message: str):
    logger.error(message)

def handle_http_exception(exc: HTTPException):
    log_error(f"HTTP Exception: {exc.detail}")
    raise exc  # Rethrow the exception to let FastAPI handle it