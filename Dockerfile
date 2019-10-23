# Stage 1
FROM node:10.16.0-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install python make build-essential -y
ADD package*.json ./
COPY . /app

RUN npm install -g typescript
RUN npm install 
RUN npm run build 
