# backend/src/api/__init__.py

from .trends import router as trends_router
from .content import router as content_router
from .health import router as health_router

__all__ = ["trends_router", "content_router", "health_router"]