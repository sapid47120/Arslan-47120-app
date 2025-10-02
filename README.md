# Arslan-47120-app

This is a simple Node.js application built with Express for my DevOps activity.  
It displays my **name** and **SAP ID** when accessed in a web browser.  

---

## 👤 Student Information
- **Name:** Arslan Tahir  
- **SAP ID:** 47120  

---

## 📝 Steps of the Activity

### Step 1: Create Project Folder
- Created a folder named **Arslan-47120-app**.
- This folder contains all project files.

---

### Step 2: Create a Simple Web App
- Added `app.js` with a small Express server.  
- Code inside `app.js`:  

    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) => {
      res.send('My name is Arslan Tahir and my SAP is 47120');
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

---

### Step 3: Create Dockerfile
- Added a `Dockerfile` to containerize the app.  
- Dockerfile content:  

    FROM node:18-alpine

    WORKDIR /usr/src/app

    COPY package*.json ./
    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]

---

### Step 4: Build and Run the App

#### 🔹 Run Locally
1. Install dependencies:  
    npm install
2. Start the app:  
    npm start
3. Open in browser:  
    http://localhost:3000  

Output:  
    My name is Arslan Tahir and my SAP is 47120

#### 🔹 Run with Docker
1. Build the Docker image:  
    docker build -t arslan-47120-app .
2. Run the container:  
    docker run -p 3000:3000 arslan-47120-app
3. Open in browser:  
    http://localhost:3000  

Output:  
    My name is Arslan Tahir and my SAP is 47120

---

### Step 5: Push Code to GitHub
1. Initialize Git:  
    git init  
    git add .  
    git commit -m "Initial commit - Arslan Tahir 47120 app"

2. Connect to GitHub:  
    git branch -M main  
    git remote add origin https://github.com/sapid47120/Arslan-47120-app.git  
    git push -u origin main

---

## 📂 Project Structure
Arslan-47120-app/  
│── app.js            # Main Express app (prints name + SAP)  
│── package.json      # Node.js dependencies & start script  
│── Dockerfile        # Docker configuration  
│── .dockerignore     # Files to ignore when building Docker image  
│── README.md         # Project documentation (this file)  
