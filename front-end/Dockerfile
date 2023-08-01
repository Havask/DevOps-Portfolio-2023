# Stage 1: Build React.js front end
FROM node:14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install  # Use npm install instead of npm ci
COPY . .
RUN npm run build

# Stage 2: Serve React.js app with a lightweight HTTP server
FROM node:14-alpine
WORKDIR /app
# Copy the build output from the 'build' stage to the 'stage-2' image's 'public' directory
COPY --from=build /app/build ./public
RUN npm install -g serve
CMD ["serve", "-s", "public"]   # Use the 'public' directory for serving the app


EXPOSE 3000
