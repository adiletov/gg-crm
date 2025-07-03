import { createBrowserRouter } from "react-router";

import AuthLayout from "@/app/layouts/AuthLayout";
import { SignIn, SignUp } from "@/modules/auth";
import BaseLayout from "../layouts/BaseLayout";
import ProfilePage from "@/pages/private/ProfilePage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);
