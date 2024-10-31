# backend/src/utils/logging.py
import socketio

sio = socketio.AsyncServer(async_mode='asgi')

def emit_log(message):
    sio.emit('log', message)