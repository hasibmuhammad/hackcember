import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Hackathons from "../pages/Hackathons/Hackathons";
import Mentors from "../pages/Mentors/Mentors";
import Login from "../pages/Login/Login";

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
        path: "/hackathons",
        element: <Hackathons />,
      },
      {
        path: "/mentors",
        element: <Mentors />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;