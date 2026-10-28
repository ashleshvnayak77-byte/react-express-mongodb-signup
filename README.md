# Sign Up App — React, Express REST API and MongoDB

A simple lab task with a React sign-up/login form, an Express REST API and MongoDB storage.

## Features
- Sign up with email and password
- Log in with an existing account
- Checks for duplicate email addresses
- Passwords are hashed before being saved in MongoDB
- Simple responsive design

## Run locally

### 1. Install Node.js
Install the Node.js LTS version if it is not already installed: https://nodejs.org/

### 2. Create a MongoDB database
Create a free MongoDB Atlas cluster: https://www.mongodb.com/cloud/atlas
Create a database user, allow your current IP address in Network Access, and copy the Node.js connection string. Replace `USERNAME` and `PASSWORD` in the connection string with the database user's credentials.

### 3. Add your database connection
In this project folder, copy `.env.example` to a new file named `.env`. Put your MongoDB Atlas connection string after `MONGODB_URI=`. Keep `.env` private; it is ignored by Git.

Example:

```env
MONGODB_URI=mongodb+srv://myUser:myPassword@cluster0.example.mongodb.net/signup_lab?retryWrites=true&w=majority
PORT=5000
```

Do not include angle brackets. If your password contains special characters, URL-encode them in the connection string.

### 4. Install packages and run
Open Command Prompt in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173). Keep the terminal open while testing.

## REST API

- `POST /api/auth/signup` — body: `{"email":"student@example.com","password":"secret123"}`
- `POST /api/auth/login` — body: `{"email":"student@example.com","password":"secret123"}`

## Deploying
Build the React app with `npm run build`, then start the Express server with `npm start`. The server serves the built frontend and API from one web service. Configure `MONGODB_URI` as an environment variable in your hosting dashboard; do not upload `.env` to GitHub.
