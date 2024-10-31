# config.py - Loads and manages environment configurations
import os

# Load settings from environment variables
DATABASE_URL = os.getenv("DATABASE_URL")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")