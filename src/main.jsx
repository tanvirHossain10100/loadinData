import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
