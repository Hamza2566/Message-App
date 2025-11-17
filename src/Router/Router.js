import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
