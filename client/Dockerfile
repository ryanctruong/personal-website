FROM node:26-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html tsconfig*.json vite.config.ts ./
COPY public/ ./public/
COPY src/ ./src/
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
EXPOSE 8080
