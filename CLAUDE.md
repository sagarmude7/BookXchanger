# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BookXchanger is a MERN stack marketplace for buying and selling second-hand books. The repo is a monorepo with the Express backend at root and a Create React App frontend in `client/`.

Deployed at:

- Frontend: https://bookxchanger.netlify.app/
- Backend: https://bookxchanger-app.herokuapp.com/

## Commands

### Development

```bash
npm run dev          # Run backend (nodemon) + frontend (CRA) concurrently
npm run server       # Backend only with hot-reload
npm run client       # Frontend only
```

### Backend

```bash
npm install          # Install backend dependencies (run from root)
npm start            # Production server
```

### Frontend

```bash
cd client && npm install    # Install frontend dependencies
cd client && npm run build  # Production build
cd client && npm test       # Run CRA tests
```

### Environment Setup

Create `config/config.env`:

```
NODE_ENV=development
PORT=5000
MONGO_URI=<MongoDB connection string>
TOKEN_SECRET=<JWT secret>
```

## Architecture

### Backend (root)

- **`index.js`** — Express app entry point; also sets up Socket.io server with CORS for the Netlify frontend. Handles socket events: `login`, `logout`, `join` (fetch chat history), `message` (relay and email notification for offline users).
- **`config/db.js`** — Mongoose connection setup
- **`routes/`** — Express routers: `books.js` and `users.js`
- **`controllers/`** — Business logic for books and users, separated from routing
- **`models/`** — Mongoose schemas: `User`, `Book`, `Message`
- **`middleware/auth.js`** — JWT verification middleware for protected routes
- **`validators/`** — Joi-based input validation schemas

### Frontend (`client/src/`)

- **`api/index.js`** — Single Axios instance with hardcoded base URL (`https://bookxchanger-app.herokuapp.com/`). An interceptor automatically attaches `Authorization: Bearer <token>` from `localStorage.profile` to every request.
- **`service/socket.js`** — Socket.io client configured to connect to the Heroku backend; auto-connect is disabled and connection is initiated manually in `App.js`.
- **`actions/` + `reducers/`** — Redux + Redux-Thunk state management. Store slices: `auth`, `books`, `book`, `user`, `wishList`, `chats`, `notifications`, `recents`, `filter`.
- **`components/`** — Feature-based folder structure (Auth, AllBooksComponents, PostAdComponents, Profile, etc.). Material-UI v4 is the primary component/styling library.

### Data Flow

1. React components dispatch Redux actions → action creators call `api/index.js` → Axios hits Express routes → controllers interact with MongoDB via Mongoose.
2. Real-time chat: `App.js` connects the Socket.io client on login; messages go through the Socket.io server in `index.js`, which persists them to the `Message` collection and emails offline recipients via Nodemailer.

### Authentication

JWT tokens are stored in `localStorage` under the key `profile`. The Axios interceptor injects the token automatically. The backend `middleware/auth.js` verifies it. Social login (Google, Facebook OAuth) is also supported and follows the same JWT flow after server-side validation.

### Key Integrations

- **Nodemailer** — password reset, email verification, offline chat notifications
- **Socket.io 4.x** — real-time bidirectional chat (same version on client and server)
- **Material-UI v4** — UI component library (not v5)
