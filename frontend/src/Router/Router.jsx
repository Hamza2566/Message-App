import React from "react";

import HomePage from "../Pages/HomePage/HomePage";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ChatWindow from "../Pages/Dashboard/ChatWindow";
import SignIn from "../Pages/signin/Signin";
import SignUp from "../Pages/signup/Signup";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Parent layout
    children: [
      {
        index: true,        // Default child → SignIn
        element: <SignIn />,

      },
      {
        path: "signup",     // Switch to SignUp
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "chat/:id", element: <ChatWindow /> },
    ],
  },
]);

export default router;
