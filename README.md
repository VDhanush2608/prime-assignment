# Prime Assignment - Full Stack Task Manager

A full stack task management project with:

- `backend`: Node.js, Express, MongoDB, JWT auth, role-based access
- `frontend/frontend`: React (Create React App) single-page client

## Project Structure

```text
prime-assignment/
|- backend/
|  |- src/
|  |- server.js
|  |- package.json
|  |- .env
|- frontend/
   |- frontend/
      |- src/
      |- public/
      |- package.json
```

## Features

- User registration and login
- JWT-based authentication
- Task CRUD for authenticated users
- Admin-only task deletion route
- Frontend UI for auth, task creation, and task status toggling

## Tech Stack

- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, cors, helmet, morgan
- Frontend: React, react-scripts

## Prerequisites

- Node.js 18+ (recommended)
- npm
- MongoDB Atlas or local MongoDB instance

## Environment Variables (Backend)

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:5000`.

Health route:

- `GET /` -> `Prime Assignment API Running`

## Frontend Setup

```bash
cd frontend/frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`.

Optional frontend env file (`frontend/frontend/.env`):

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

If not provided, the frontend already defaults to `http://localhost:5000/api/v1`.

## API Endpoints

Base URL: `http://localhost:5000/api/v1`

### Auth

- `POST /auth/register`
  - Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- `POST /auth/login`
  - Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

### Tasks (Requires `Authorization: Bearer <token>`)

- `POST /tasks` - Create task
- `GET /tasks` - Get tasks created by logged-in user
- `PUT /tasks/:id` - Update task (owned by logged-in user)
- `DELETE /tasks/:id` - Delete task (admin role only)

Example create/update fields:

```json
{
  "title": "Finish assignment",
  "description": "Write docs and submit",
  "status": "pending"
}
```

## Role-Based Access

- Default role on registration: `user`
- Admin-only operation:
  - `DELETE /api/v1/tasks/:id`

To test admin deletion, set a user's `role` to `admin` in MongoDB.

## Notes

- Passwords are hashed with `bcryptjs`.
- JWT contains `id` and `role` and expires in `1d`.
- Task list endpoint currently returns only tasks created by the logged-in user.
