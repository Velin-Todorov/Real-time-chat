# Stage 1: Initial Installation
FROM node:latest as initial_install

WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Stage 2: Further Configuration
FROM initial_install as initial_install_1

WORKDIR /frontend/social-app

# Install additional dependencies specific to social-app
RUN npm install

# Define the command to run the application
CMD ["npm", "run", "dev"]
