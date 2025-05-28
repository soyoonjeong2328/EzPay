import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Sentry import
import * as Sentry from "@sentry/react";

// Sentry 초기화
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,  
  sendDefaultPii: true
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* App 전체를 Sentry ErrorBoundary로 감쌈 */}
      <Sentry.ErrorBoundary fallback={<p>예기치 않은 오류가 발생했어요 😢</p>}>
        <App />
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
