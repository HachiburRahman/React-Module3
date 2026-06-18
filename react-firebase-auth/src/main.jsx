import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import Profile from "./components/Profile/Profile.jsx";

import Orders from "./components/Orders/Orders.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"login",
        Component:Login
      },
      {
        path:"register",
        Component:Register
      },
      {
        path:"profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
