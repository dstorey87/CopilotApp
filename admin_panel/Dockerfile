# admin_panel/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci || cat /root/.npm/_logs/*.log

# Copy the rest of your application's source code
COPY . .

# Set the environment variable for the port
ENV PORT=4000

# Expose the port the app runs in
EXPOSE 4000

# Start the application
CMD ["npm", "start"]