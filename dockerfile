FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
