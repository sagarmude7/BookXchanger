# BookXchanger

[![BookXchanger](https://res.cloudinary.com/bookxchanger/image/upload/v1621614882/Website/3_u5tfsj.gif)](https://bookxchanger.netlify.app/)

A full-stack MERN marketplace for buying and selling second-hand books — primarily aimed at college students who want to trade textbooks without exchanging phone numbers or email addresses.

**Live:** [bookxchanger.netlify.app](https://bookxchanger.netlify.app/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## Features

- **Book listings** — post, edit, and delete ads with book details (name, subject, branch, edition, condition, price, image)
- **Advanced search & filter** — search by book name, subject, branch, or condition
- **Wishlist** — save books to review later
- **Real-time chat** — Socket.io-powered messaging between buyers and sellers; no phone numbers or emails are shared
- **Offline notifications** — email alert when you receive a message while offline
- **User dashboard** — track active ads, sold ads, and wishlist in one place
- **Authentication** — email/password signup, Google OAuth, and Facebook OAuth
- **Email verification & password reset** — secure token-based flows via Nodemailer
- **Feedback / contact** — About Us page with a direct feedback form
- **Live chat support** — Tawk.to chatbot embedded for real-time visitor support

---

## Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | React 17, Redux + Redux-Thunk, React Router 5 |
| UI       | Material-UI v4, Styled Components             |
| Backend  | Node.js, Express 4                            |
| Database | MongoDB, Mongoose                             |
| Realtime | Socket.io 4                                   |
| Auth     | JWT, bcryptjs, Google OAuth, Facebook OAuth   |
| Email    | Nodemailer                                    |
| Hosting  | Netlify (frontend), Heroku (backend)          |

---

## Project Structure

```
BookXchanger/
├── src/                          # Backend source
│   ├── server.js                 # Express entry point + Socket.io server
│   ├── config/
│   │   ├── db.js                 # Mongoose connection
│   │   ├── config.env            # Environment variables (not committed)
│   │   └── config.env.example    # Template for env vars
│   ├── controllers/
│   │   ├── books.js              # Book CRUD logic
│   │   └── users.js              # User auth & profile logic
│   ├── middleware/
│   │   └── auth.js               # JWT verification middleware
│   ├── models/
│   │   ├── Book.js               # Book schema
│   │   ├── User.js               # User schema
│   │   └── Message.js            # Chat message schema
│   ├── routes/
│   │   ├── books.js              # /books routes
│   │   └── users.js              # /users routes
│   └── validators/               # Joi input validation schemas
├── client/                       # React frontend (Create React App)
│   └── src/
│       ├── actions/              # Redux action creators
│       ├── reducers/             # Redux reducers (auth, books, chats, etc.)
│       ├── components/           # Feature-based React components
│       ├── api/index.js          # Axios instance with JWT interceptor
│       └── service/socket.js     # Socket.io client
├── .prettierrc                   # Prettier formatting config
├── .prettierignore
├── .gitignore
├── package.json
└── Procfile                      # Heroku deployment config
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 16
- npm ≥ 7
- A MongoDB Atlas cluster (or local MongoDB instance)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sagarmude7/BookXchanger.git
cd BookXchanger

# 2. Install backend dependencies
npm install

# 3. Install frontend dependencies
cd client && npm install && cd ..

# 4. Set up environment variables (see section below)
```

### Running in Development

```bash
npm run dev        # starts backend (nodemon) + frontend (CRA) concurrently
```

The frontend is served at `http://localhost:3000` and the backend at `http://localhost:5000`.

### Other Scripts

| Command                      | Description                         |
| ---------------------------- | ----------------------------------- |
| `npm run dev`                | Run backend + frontend concurrently |
| `npm run server`             | Backend only (nodemon hot-reload)   |
| `npm run client`             | Frontend only                       |
| `npm start`                  | Production backend (used by Heroku) |
| `cd client && npm run build` | Production frontend build           |
| `cd client && npm test`      | Run frontend tests                  |

---

## Environment Variables

Copy `src/config/config.env.example` to `src/config/config.env` and fill in the values:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/bookxchanger
TOKEN_SECRET=<your_jwt_secret>

# SMTP credentials used for verification & feedback emails
SMTP_USER=<your_smtp_user>
SMTP_PASS=<your_smtp_app_password>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
FEEDBACK_RECEIVER=<feedback_recipient_email>

# Comma-separated list of allowed CORS origins (frontend URLs)
ALLOWED_ORIGINS=https://bookxchanger.netlify.app
```

`src/config/config.env` is git-ignored — never commit real credentials.

> The frontend API base URL is hardcoded to `https://bookxchanger-app.herokuapp.com/` in `client/src/api/index.js`. For local development, the CRA proxy (`client/package.json`) redirects API calls to the backend.

---

## API Reference

All routes are prefixed with the backend base URL. Protected routes require `Authorization: Bearer <token>` in the request header.

### Books (`/books`)

| Method | Endpoint                 | Auth | Description                |
| ------ | ------------------------ | ---- | -------------------------- |
| GET    | `/books/all`             | No   | Fetch all book listings    |
| POST   | `/books/add`             | Yes  | Create a new book ad       |
| PATCH  | `/books/:id`             | Yes  | Edit a book ad             |
| PATCH  | `/books/:id/sold`        | Yes  | Mark a book as sold        |
| PATCH  | `/books/:id/addWishList` | Yes  | Toggle wishlist for a book |
| DELETE | `/books/:id`             | Yes  | Delete a book ad           |

### Users (`/users`)

| Method | Endpoint                      | Auth | Description                       |
| ------ | ----------------------------- | ---- | --------------------------------- |
| POST   | `/users/signUp`               | No   | Register with email & password    |
| POST   | `/users/signIn`               | No   | Login with email & password       |
| POST   | `/users/googleFacebookSignIn` | No   | OAuth login (Google / Facebook)   |
| POST   | `/users/forgot-password`      | No   | Send password reset email         |
| POST   | `/users/token-check`          | No   | Verify password reset token       |
| POST   | `/users/reset-password`       | No   | Reset password using token        |
| POST   | `/users/verify-email`         | No   | Send email verification link      |
| POST   | `/users/validate-user`        | No   | Validate email verification token |
| GET    | `/users/profile/:id`          | Yes  | Get a user's profile              |
| GET    | `/users/profile/messages`     | Yes  | Get recent chat contacts          |
| PATCH  | `/users/profile`              | Yes  | Update profile details            |
| PATCH  | `/users/profile/password`     | Yes  | Change password                   |
| POST   | `/users/send-email`           | No   | Submit feedback                   |
| DELETE | `/users/:id`                  | Yes  | Remove a book from wishlist       |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Team

| Name            | GitHub                                             |
| --------------- | -------------------------------------------------- |
| Sagar Mude      | [@sagarmude7](https://github.com/sagarmude7)       |
| Vedant Mondkar  | [@vdmondkr2002](https://github.com/vdmondkr2002)   |
| Vishal Dange    | [@vishalbdange](https://github.com/vishalbdange)   |
| Mohak Chandani  | [@MohakChandani](https://github.com/MohakChandani) |
| Shashank Pagrut | [@Shashank2370](https://github.com/Shashank2370)   |
| Vedant Mankar   | [@VedantMankar](https://github.com/VedantMankar)   |

Mentored by [Harshil Doshi](https://github.com/Harshil333) — [Developer Students Club VJTI](https://github.com/DSC-VJTI) / [Community of Coders](https://github.com/CommunityOfCoders) · SKILL UP 2.0

---

## License

[MIT](LICENSE)
