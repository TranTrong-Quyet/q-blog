import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Register from "./pages/Register.jsx";
import Authors from "./pages/Authors.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import UserProfile from "./pages/UserProfile";
import CategoryPosts from "./pages/CategoryPosts.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/authors/:id",
        element: <Authors />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "edit",
        element: <EditPost />,
      },
      {
        path: "posts/categories/:category",
        element: <CategoryPosts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
