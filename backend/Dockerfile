# backend/Dockerfile
FROM python:3.8-slim AS builder
WORKDIR /app
# Upgrade pip
RUN pip install --upgrade pip
# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
# Copy application code
COPY . .
# Final runtime image
FROM python:3.8-slim
WORKDIR /app
# Copy installed dependencies from builder
COPY --from=builder /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages
# Copy application code from builder
COPY --from=builder /app ./
# Run the application as a module
CMD ["python", "-m", "src.main"]