# Stage 1: Build the Next.js application
FROM node:20-alpine3.18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Build the Next.js application
RUN npm run build

# Stage 2: Run the Next.js application
FROM node:20-alpine3.18

# Set the working directory
WORKDIR /app

# Copy the build output and dependencies from the previous stage
COPY --from=builder /app ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
