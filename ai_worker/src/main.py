# ai_worker/src/main.py
import time
from .content_generation import generate_content

selected_model = "t5"

def load_model(model):
    global selected_model
    selected_model = model
    print(f"Loaded model: {model}")

if __name__ == "__main__":
    print("AI Worker started...")
    load_model(selected_model)
    while True:
        # Simulate task processing
        time.sleep(10)