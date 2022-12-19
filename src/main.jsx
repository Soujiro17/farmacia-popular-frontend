import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import "./index.css";
import UserProvider from "./contexts/UserContext";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <AppRoutes />
        <ToastContainer />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
