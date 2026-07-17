# SMIT Backend Assignment — User Signup & Login (MVC)

A small Node.js + Express backend built with the MVC pattern, connected to MongoDB, with signup/login for users. Built as a Batch 18 assignment at Saylani Mass IT Training (SMIT).

## Features

- MVC folder structure (`model`, `controller`, `router`, `services`, `utils`, `config`)
- MongoDB connection via Mongoose
- User signup with hashed passwords (`bcrypt`)
- User login with password verification
- JWT-based authentication token returned on signup/login
- Request logging with `morgan`
- CORS enabled

## Project Structure

```
smit-backend-assignment/
├── config/
│   └── db.js               # MongoDB connection
├── model/
│   └── userModel.js         # User schema
├── services/
│   └── authService.js        # Signup/login business logic
├── controller/
│   └── userController.js     # Request/response handlers
├── router/
│   └── userRouter.js          # Route definitions
├── utils/
│   └── generateToken.js       # JWT helper
├── index.js                    # App entry point
├── .env                         # Environment variables (not committed)
└── package.json
```

## Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root with:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@<your_cluster>.mongodb.net/smit_assignment?retryWrites=true&w=majority
   JWT_SECRET=your_random_secret_key
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint             | Description                  |
|--------|----------------------|-------------------------------|
| POST   | `/api/users/signup`  | Register a new user           |
| POST   | `/api/users/login`   | Log in an existing user       |
| GET    | `/api/users`         | Get all users (no passwords)  |

### Example — Signup

```
POST /api/users/signup
Content-Type: application/json

{
  "name": "Hassan",
  "email": "hassan@test.com",
  "password": "123456"
}
```

### Example — Login

```
POST /api/users/login
Content-Type: application/json

{
  "email": "hassan@test.com",
  "password": "123456"
}
```

Both return the user's info along with a JWT token to use for authenticated requests.

## Tech Stack

- Node.js
- Express
- MongoDB / Mongoose
- bcrypt
- jsonwebtoken
- cors, morgan, dotenv

## Author

Hassan — SMIT Batch 18
