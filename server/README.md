# EduReach Server

The server is the Node.js and Express API for EduReach. It handles authentication, protected chat, counselor calling, MongoDB persistence, and retrieval-augmented responses from the college knowledge base.

## Stack

- Node.js 24+
- Express 5 and TypeScript
- MongoDB with Mongoose
- LangChain with Google Gemini
- Vapi API for counselor calls
- JWT authentication and bcryptjs password hashing

## Setup

```bash
npm install
copy .env.example .env
```

Fill in `.env` with real values. Do not commit this file:

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

## Commands

```bash
npm run dev    # Start the server with watch mode
npm run build  # Type-check the server
npm start      # Start the server with Node.js
```

The API listens on `http://localhost:5000` by default.

## API Areas

- `/api/auth` handles registration, login, and authenticated user access.
- `/api/chat` handles protected knowledge-base chat requests.
- `/api/vapi` handles protected counselor call requests.

## Knowledge Base

The source content is stored in `knowledge-base/edureach-knowledge.txt`. On startup, the server initializes the retrieval data in MongoDB before opening the HTTP listener. MongoDB and Google AI credentials must be available for this process to complete.

## Deployment

Deploy the server as a Node.js service. Configure `CLIENT_URL` with the deployed frontend origin and set all secrets through the deployment provider's environment settings. The public API URL should be supplied to the client as `VITE_API_URL` with the `/api` suffix.

- **Live API:** [edureach-platform-pktf.onrender.com](https://edureach-platform-pktf.onrender.com)
- **Frontend origin:** [edureach-platform-mauve.vercel.app](https://edureach-platform-mauve.vercel.app/)

See the [project README](../README.md) for full-stack setup and deployment guidance.