import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PostJob from "../Pages/PostJob";
import FindJob from "../Pages/FindJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/find-jobs",
        element: <FindJob />,
      },
      {
        path: "/post-jobs",
        element: <PostJob />,
      }
    ],
  },
]);

export default router