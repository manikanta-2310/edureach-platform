# EduReach Platform

EduReach is a college intelligence platform that connects students with course information, campus resources, mentors, events, and AI-powered guidance. The repository contains a React frontend and a Node.js/Express backend with MongoDB-backed authentication, chat, retrieval-augmented generation, and Vapi calling support.

## Links

- **Source repository:** [github.com/manikanta-2310/edureach-platform](https://github.com/manikanta-2310/edureach-platform)
- **Live frontend:** [edureach-platform-mauve.vercel.app](https://edureach-platform-mauve.vercel.app/)
- **Live API:** [edureach-platform-pktf.onrender.com](https://edureach-platform-pktf.onrender.com)

## Project Structure

```text
edureach-platform/
  client/   React + TypeScript + Vite application
  server/   Node.js + Express + TypeScript API
```

## Features

- Student registration, login, and protected account flows
- College courses, achievements, mentors, events, and student-life content
- Authenticated AI chat backed by the EduReach knowledge base
- Vapi-powered counselor calling flow
- MongoDB persistence for users and vector-search knowledge documents
- Responsive interface for desktop and mobile screens

## Technology

### Frontend

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Lucide React

### Backend

- Node.js 24+
- Express 5
- TypeScript
- MongoDB and Mongoose
- LangChain and Google Gemini
- Vapi API
- JSON Web Tokens and bcryptjs

## Requirements

- Node.js 24 or newer for the server
- npm
- MongoDB database
- Google AI API key for embeddings and chat
- Vapi credentials for voice calling features

## Local Development

Install dependencies in both applications:

```bash
cd client
npm install

cd ../server
npm install
```

Create environment files from the included examples:

```bash
copy client\.env.example client\.env
copy server\.env.example server\.env
```

Use the following local development values:

```env
# client/.env
VITE_API_URL=http://localhost:5000/api
```

```env
# server/.env
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

Start the API and frontend in separate terminals:

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

The default local URLs are `http://localhost:5173` for the frontend and `http://localhost:5000` for the API.

## Validation

```bash
cd client
npm run lint
npm run build

cd ../server
npm run build
```

## Deployment

Deploy the frontend and backend as separate services. Configure the frontend's `VITE_API_URL` with the public API base URL, and configure the backend's `CLIENT_URL` with the public frontend URL. Add all other backend variables through the deployment provider's secret/environment-variable settings.

Never commit `.env` files or real API keys. Only `.env.example` files belong in Git.

## Documentation

- [Client application guide](client/README.md)
- [Server API guide](server/README.md)