import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import HackathonDetail from "../pages/HackathonDetail/HackathonDetail";
import Register from "../pages/Register/Register";

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
        element: <HackathonDetail />,
        loader: () => fetch("../../data/hackathons.json"),
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
