import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
]);

export default router;
