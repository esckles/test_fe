import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Auth/Register";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Homescreen from "../Pages/Home/Homescreen";
import Otp from "../Pages/Auth/Otp";
import PrivateRoute from "./PrivateRouter";
import Layout from "../Layout/Layout";
import Notification from "../Pages/Auth/Notification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/otp/:id",
        element: <Otp />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Homescreen />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
