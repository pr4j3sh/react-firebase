import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);
