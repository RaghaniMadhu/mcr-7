import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TripAdvisorContextProvider from "./contexts/TripAdvisorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TripAdvisorContextProvider>
        <App />
      </TripAdvisorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
