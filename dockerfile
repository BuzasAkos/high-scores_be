# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Expose the port
EXPOSE 3000

# Define the command to run the app
CMD ["node", "index.js"]
