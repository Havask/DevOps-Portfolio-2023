# Stage 1: Build React.js front end
FROM node:14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve React.js app with a lightweight HTTP server
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 80
