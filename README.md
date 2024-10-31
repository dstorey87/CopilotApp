
# Affiliate Marketing AI Platform

This project is a scalable, Dockerized web application designed for AI-driven affiliate marketing.
The app allows users to dynamically switch between AI models, and enables real-time log viewing
and centralized configuration for easy management.

---

## Application Workflow
1. **Home Page** - Displays main content and links to other pages.
2. **Trends Page** - Fetches and displays trend suggestions; allows "Approve" or "Deny".
3. **Admin Page** - Allows users to select AI models, view logs, and monitor real-time updates.
4. **AI Worker** - Loads and switches between local and API-based models.

---

## Core Requirements for Copilot

### 1. AI Model Management and Switching
- **Objective**: Allow dynamic switching between AI models via a "Choose Your AI" dropdown.
- **Configuration**: Store model options in `model_config.json` for toggling between local/API models.
- **Model Choices**:
  - **Trend Analysis**: Options include `gpt-neo` (local) and `google_trends` (API).
  - **Content Generation**: Options include `t5` (local), `gpt2` (API), and `davinci` (API).

### 2. Centralized Configuration
- **File**: Use `.env` for API keys, database URLs, and default settings.

### 3. Real-Time Logging
- **Admin Panel**: Displays real-time logs for backend and AI worker services.

