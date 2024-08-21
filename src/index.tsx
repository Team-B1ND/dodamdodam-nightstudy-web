import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Sentry from "@sentry/react";
import config from "./config/config.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Sentry.init({
//   dsn: config.DSN,
//   environment: process.env.NODE_ENV,
//   integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//   tracesSampleRate: 1.0,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
