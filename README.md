# ConvoHub

ConvoHub is a real-time chat application built with the MERN stack. Users can create an account, see online users, exchange messages instantly, and view persistent conversation history.

## Features

- JWT authentication with secure password hashing
- User registration, login, and logout
- Real-time one-to-one messaging with Socket.IO
- Online user presence indicators
- Persistent conversations and message history in MongoDB
- Responsive desktop and mobile chat layout
- Profile avatars generated with DiceBear
- Redux Toolkit state management with Redux Persist

## Tech Stack

- Frontend: React 19, Vite, React Router, Redux Toolkit, Tailwind CSS, DaisyUI
- Backend: Node.js, Express, Mongoose, Socket.IO
- Database: MongoDB
- Authentication: JWT, HTTP-only cookies, bcryptjs

## Project Structure

```text
ConvoHub/
├── backend/
│   ├── config/             MongoDB connection
│   ├── controllers/        Authentication and message logic
│   ├── middleware/         JWT authentication middleware
│   ├── models/             User, conversation, and message schemas
│   ├── routes/             User and message API routes
│   ├── socket/             Socket.IO server setup
│   └── server.js           Express application entry point
├── frontend/
│   ├── src/components/     React UI components
│   ├── src/CustomHooks/    Data fetching and real-time hooks
│   ├── src/utils/          Redux store and slices
│   └── src/main.jsx        Frontend entry point
└── package.json
```

## Prerequisites

- Node.js 16 or newer
- npm
- A MongoDB database, local or hosted

## Local Setup

1. Clone the repository and enter the project directory.

   ```bash
   git clone <your-repository-url>
   cd ConvoHub
   ```

2. Install backend dependencies and frontend dependencies.

   ```bash
   npm install
   npm install --prefix frontend
   ```

3. Create a `.env` file in the project root.

   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_long_random_secret
   NODE_ENV=development
   ```

4. Start the backend in development mode.

   ```bash
   npm run dev
   ```

5. In a second terminal, start the Vite frontend.

   ```bash
   cd frontend
   npm run start
   ```

   Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

From the project root:

```bash
npm run dev       # Start the backend with Nodemon
npm run start     # Start the backend
npm run build     # Install dependencies and build the frontend
```

From `frontend/`:

```bash
npm run start     # Start the Vite development server
npm run build     # Create a production frontend build
npm run lint      # Run ESLint
npm run preview   # Preview the production build
```

## API Overview

All protected routes use the JWT cookie created during login.

| Method | Endpoint                | Purpose                         |
| ------ | ----------------------- | ------------------------------- |
| POST   | `/api/user/register`    | Create a user account           |
| POST   | `/api/user/login`       | Authenticate a user             |
| GET    | `/api/user/logout`      | Clear the authentication cookie |
| GET    | `/api/user/`            | Get users available for chat    |
| POST   | `/api/message/send/:id` | Send a message to a user        |
| GET    | `/api/message/:id`      | Get conversation history        |

## Real-Time Events

- `getOnlineUsers`: sent by the server when online presence changes
- `newMessage`: sent to the receiving user's socket when a message is created

## Production Build

The root build script creates the frontend bundle in `frontend/dist`. The Express server serves that bundle and handles application fallback routing.

```bash
npm run build
npm start
```

The deployed application is available at [conovohub-chatapp.onrender.com](https://conovohub-chatapp.onrender.com) when the hosted services are running.

## Contributing

1. Create a feature branch.
2. Keep changes focused and consistent with the existing structure.
3. Run `npm run lint` from `frontend/` and `npm run build` before opening a pull request.
4. Describe behavior changes and any required environment variables.

## License

This project currently does not declare a repository license. Add a license file before distributing it outside your organization.
