import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
