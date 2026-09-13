# EduReach Platform

EduReach is an AI-powered college intelligence platform that helps students make smarter education decisions. It brings course information, campus life, mentors, placements, events, and personalized AI guidance into one accessible experience.

## Live Demo

- **Frontend:** [edureach-platform-mauve.vercel.app](https://edureach-platform-mauve.vercel.app/)
- **Backend API:** [edureach-platform-pktf.onrender.com](https://edureach-platform-pktf.onrender.com)
- **Source code:** [github.com/manikanta-2310/edureach-platform](https://github.com/manikanta-2310/edureach-platform)

## Features

- User registration, login, and protected account access
- AI-powered college guidance through an authenticated chat experience
- Retrieval-augmented answers from the EduReach knowledge base
- Voice counselor call requests through Vapi
- Course information for B.Tech, M.Tech, and MBA programs
- Placement statistics, recruiters, salary information, and achievements
- Mentor profiles and department expertise
- Campus facilities, student life, clubs, sports, and events
- Responsive interface for desktop and mobile devices

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router
- Plain CSS with Flexbox for responsive layouts
- Axios
- Lucide React
- React Hot Toast

### Backend

- Node.js 24+
- Express 5
- TypeScript
- MongoDB and Mongoose
- JSON Web Tokens
- bcryptjs
- CORS

### AI and Integrations

- LangChain for retrieval and prompt orchestration
- Google Gemini for embeddings and AI responses
- MongoDB vector search for knowledge retrieval
- Vapi for counselor call initiation

### Deployment

- Vercel for the frontend
- Render for the backend API
- GitHub for source control

## Project Structure

```text
edureach-platform/
|
|-- client/
|   |-- src/
|   |   |-- components/     Homepage sections and interactive UI
|   |   |                   Component CSS and shared site styles
|   |   |-- context/        Authentication state
|   |   |-- data/           College and site content
|   |   |-- pages/          Home, login, and signup screens
|   |   |-- services/        API, auth, chat, and Vapi clients
|   |   |-- App.tsx
|   |   `-- main.tsx
|   |-- package.json
|   `-- vite.config.ts
|
|-- server/
|   |-- knowledge-base/     EduReach source knowledge
|   |-- src/
|   |   |-- config/          Database configuration
|   |   |-- controllers/     HTTP request handlers
|   |   |-- middleware/      Auth and error handling
|   |   |-- models/          User and knowledge document models
|   |   |-- routes/          Auth, chat, and Vapi routes
|   |   |-- services/        RAG and Vapi integrations
|   |   `-- utils/           JWT and password utilities
|   |-- package.json
|   `-- tsconfig.json
|
|-- .gitignore
`-- README.md
```

## System Architecture

```text
          Student
         |
         v
      React + Vite Client
      Courses | Mentors | Campus
      Chat | Auth | Counselor Call
         |
        Axios requests
         |
         v
         Express + TypeScript API
         /api/auth  /api/chat
         /api/vapi
        /          \
       v            v
      MongoDB       AI Services
      Users and RAG     Gemini + Vapi
     documents
```

## User Journey

```text
Visit EduReach
  |
  v
Explore courses, mentors, campus life, and placements
  |
  v
Create an account or log in
  |
  v
Ask the AI counselor questions about EduReach
  |
  v
Request a counselor call when additional guidance is needed
```

## AI Chat Flow

```text
Authenticated student sends a question
      |
      v
   Server receives /api/chat/message
      |
      v
   Knowledge base retrieval in MongoDB
      |
      v
       Gemini generates an answer
      |
      v
      Response to client
```

## Counselor Call Flow

```text
Student submits course and topic details
      |
      v
   Server receives /api/vapi/call
      |
      v
   Vapi starts the counselor call
      |
      v
   Call information returns to client
```

## Backend API

All API routes are grouped under the `/api` prefix.

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### AI Chat

```text
POST /api/chat/message
```

Requires a valid JWT access token.

### Counselor Calls

```text
POST /api/vapi/call
```

Requires a valid JWT access token and Vapi configuration.

## Environment Variables

### Client

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, set it to:

```env
VITE_API_URL=https://edureach-platform-pktf.onrender.com/api
```

### Server

Create `server/.env` using `server/.env.example`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<long-random-secret>
JWT_EXPIRES_IN=7d
GOOGLE_API_KEY=<your-google-ai-api-key>
GEMINI_MODEL=gemini-3.1-flash-lite
VAPI_API_KEY=<your-vapi-private-api-key>
VAPI_PHONE_NUMBER_ID=<your-vapi-phone-number-id>
VAPI_ASSISTANT_ID=<your-vapi-assistant-id>
```

For production, set `CLIENT_URL` to:

```env
CLIENT_URL=https://edureach-platform-mauve.vercel.app
```

Never commit `.env` files or real credentials. Only `.env.example` files belong in Git.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/manikanta-2310/edureach-platform.git
cd edureach-platform
```

### 2. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

```bash
copy ..\client\.env.example ..\client\.env
copy .env.example .env
```

Fill in the server credentials and keep them private.

### 4. Start the backend

```bash
cd server
npm run dev
```

### 5. Start the frontend

Open a second terminal:

```bash
cd client
npm run dev
```

The local application runs at `http://localhost:5173` and the API runs at `http://localhost:5000` by default.

The client uses regular CSS and Flexbox for layout and responsive styling. Tailwind CSS is not required.

## Validation

Run the frontend checks:

```bash
cd client
npm run lint
npm run build
```

The production build compiles the TypeScript client and bundles the Vite application.

Run the server type check:

```bash
cd server
npm run build
```

## Deployment

### Frontend

The client is deployed on Vercel. Configure the project root as `client` and set:

```env
VITE_API_URL=https://edureach-platform-pktf.onrender.com/api
```

### Backend

The server is deployed on Render. Configure the project root as `server`, use the Node.js start command, and add all server environment variables through Render's secret settings.

Set the production CORS origin to:

```env
CLIENT_URL=https://edureach-platform-mauve.vercel.app
```

## Project Goal

EduReach is designed to make college exploration more personal and practical. Instead of forcing students to search across disconnected pages, it combines structured college information with AI-powered guidance and an optional counselor call experience.

## Future Improvements

- Add automated API and component tests
- Add request validation and rate limiting for AI endpoints
- Improve session expiry and refresh-token handling
- Add a public health check and deployment readiness endpoint
- Expand the knowledge base and administration workflow
- Add more colleges and configurable institution profiles
- Add richer analytics for student questions and guidance topics

## Documentation

- [Client application guide](client/README.md)
- [Server API guide](server/README.md)

## Author

Manikanta

- GitHub: [manikanta-2310](https://github.com/manikanta-2310)

## License

This project is developed for educational and portfolio purposes.