import React from "react";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import router from './Router/Router.jsx';

// Global CSS variables + reset
import './root.css';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from "./context/Usercontxt.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    < RouterProvider router={router} />
    </UserProvider>

  </StrictMode>,
);
