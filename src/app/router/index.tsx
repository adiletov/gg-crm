import { createBrowserRouter, Navigate } from "react-router";

import AuthLayout from "@/app/layouts/AuthLayout";
import BaseLayout from "@/app/layouts/BaseLayout";
import { SignIn, SignUp } from "@/modules/auth";

const isAuth = true;

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
    path: "/",
    element: isAuth ? <BaseLayout /> : <Navigate to={"/auth"} />,
    children: [],
  },
]);
