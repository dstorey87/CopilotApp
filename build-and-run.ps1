# build-and-run.ps1

# Navigate to the project root
Set-Location -Path 'D:\CopilotApp'

# Stop and remove existing containers, networks, and images
docker-compose down --remove-orphans

# Build all services without using cache
Write-Output "Building Docker containers without using cache..."
docker-compose build --no-cache --parallel

# Start all services in detached mode
Write-Output "Starting Docker containers..."
docker-compose up -d

# Display the status of the running containers
docker-compose ps