ARG NODE_VERSION=18.5.0

FROM ubuntu:22.04

############ Build React Project ###################
# Use Node.js LTS version
FROM node:${NODE_VERSION}-alpine as build

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

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]