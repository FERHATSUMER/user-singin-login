import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singin from "./components/singin/Singin";
import Login from "./components/login/Login";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
