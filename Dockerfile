ARG NODE_VERSION=18.5.0

FROM ubuntu:22.04

############ Build React Project ###################
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

RUN npm run build


############ Run Nginx ###################
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Set the user and group for the Nginx process
USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]