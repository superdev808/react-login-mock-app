ARG NODE_VERSION=18.5.0

FROM ubuntu:22.04

# Use Node.js LTS version
FROM node:${NODE_VERSION}-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]