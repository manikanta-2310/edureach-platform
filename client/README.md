# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # EduReach Client

  The client is the responsive React application for EduReach. It contains the public college experience, authentication screens, student content, AI chat drawer, counselor call flow, and protected account interactions.

  ## Stack

  - React 19 and TypeScript
  - Vite
  - React Router
  - Axios
  - Lucide React
  - React Hot Toast

  ## Setup

  ```bash
  npm install
  copy .env.example .env
  ```

  Set the API base URL in `.env`:

  ```env
  VITE_API_URL=http://localhost:5000/api
  ```

  For a deployed frontend, set `VITE_API_URL` to the public backend URL ending in `/api` before building.

  ## Deployment

  - **Live application:** [edureach-platform-mauve.vercel.app](https://edureach-platform-mauve.vercel.app/)
  - **Backend API:** [edureach-platform-pktf.onrender.com](https://edureach-platform-pktf.onrender.com)

  ## Commands

  ```bash
  npm run dev       # Start the Vite development server
  npm run lint      # Run ESLint
  npm run build     # Type-check and create a production build
  npm run preview   # Preview the production build locally
  ```

  ## Main Areas

  - `src/pages/` contains route-level screens.
  - `src/components/` contains homepage sections and interactive UI.
  - `src/context/` contains authentication state.
  - `src/services/` contains API, auth, chat, and Vapi clients.
  - `src/data/content.ts` contains the public site content.

  See the [project README](../README.md) for full-stack setup and deployment guidance.
      parserOptions: {
