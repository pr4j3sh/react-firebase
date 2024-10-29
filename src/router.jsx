import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
