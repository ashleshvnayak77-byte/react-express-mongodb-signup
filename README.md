Sign Up Process — React, Express.js, REST API and MongoDB
A simple full-stack sign-up and login project created for MERN Lab Task 2.
Output and Project Links
- GitHub source code: https://github.com/ashleshvnayak77-byte/react-express-mongodb-signup
- Run the frontend locally: http://localhost:5173/
- Backend server locally: http://localhost:5000/
Live demo status: The project has been tested locally, but a public hosted demo has not been configured yet. The localhost links work only while the project is running on your computer.

Technologies Used
- React and Vite — frontend
- CSS — light-blue user interface
- Node.js and Express.js — backend server
- REST API — sign-up and login requests
- MongoDB Atlas and Mongoose — user data storage
- bcrypt — password hashing
Features
- Sign-up form with email and password
- Login form/link for existing users
- REST API routes for sign-up and login
- Duplicate-email checking
- Passwords are hashed before being stored in MongoDB
- Responsive, simple light-blue interface
Run the Project Locally
1. Install dependencies
Install Node.js if it is not already installed: https://nodejs.org/

Open a terminal in the project folder and run:
npm install
2. Configure MongoDB
Create a .env file in the project root and set your MongoDB Atlas connection string:
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Do not upload .env to GitHub. The .gitignore file should exclude it.
3. Start the frontend and backend
npm run dev
Open the frontend at http://localhost:5173/.
Keep the terminal running while testing.
