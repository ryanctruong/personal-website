FROM node:26-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html tsconfig*.json vite.config.ts ./
COPY public/ ./public/
COPY src/ ./src/
RUN npm run build

FROM node:26-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist/ ./dist/
COPY server.mjs ./

USER node
EXPOSE 8080
CMD ["node", "server.mjs"]
