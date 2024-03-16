FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock (if available) into the container at /app
COPY package.json ./
COPY package-lock.json* yarn.lock* ./

# Install dependencies in the container
RUN yarn install

# Copy the rest of your application's code into the container at /app
COPY . .

# Your application's default port, change if different
EXPOSE 3000

# Command to run your app
CMD ["yarn", "dev"]