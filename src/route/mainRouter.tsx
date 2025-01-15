import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Page2/Landingpage";
import Register from "../Page2/Auth/Register";
import Login from "../Page2/Auth/Login";
import AuthLayout from "../Layout/AuthLayout";
import Createaccoutscreennotification from "../Page2/Auth/Createaccoutscreennotification";
import Dashboard from "../Page2/Dashboard/Dashboard";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        index: true,
        path: "dash",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        path: "create-account-notification",
        element: <Createaccoutscreennotification />,
      },
      {
        index: true,
        path: "login/:token",
        element: <Login />,
      },
      {
        index: true,
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
