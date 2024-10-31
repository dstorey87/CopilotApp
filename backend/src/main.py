# backend/src/main.py
from fastapi import FastAPI, WebSocket
import socketio
from src.api import trends_router, content_router, health_router
from src.models import models
from src.utils.logging import sio, emit_log
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()
app_socket = socketio.ASGIApp(sio, app)

# Include routers with appropriate prefixes
app.include_router(trends_router, prefix="/api/trends")
app.include_router(content_router, prefix="/api/content")
app.include_router(models.router, prefix="/api/models")
app.include_router(health_router)  # Include health router at root

@sio.event
async def connect(sid, environ):
    logger.info(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    logger.info(f"Client disconnected: {sid}")

@app.websocket("/logs")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            message = await websocket.receive_text()
            await websocket.send_text(f"Message received: {message}")
        except WebSocketDisconnect:
            break

# Remove the following block to prevent uvicorn from running the server within the app
# if __name__ == "__main__":
#     uvicorn.run(app_socket, host="0.0.0.0", port=5000)