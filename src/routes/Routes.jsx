import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import HackathonDetail from "../pages/HackathonDetail/HackathonDetail";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Faq from "../pages/Faq/Faq";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hackathon/:id",
        element: (
          <PrivateRoute>
            <HackathonDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/data/hackathons.json"),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: (
          <PrivateRoute>
            <Faq />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
        loader: () => fetch("/data/blogs.json"),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/data/blogs.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
