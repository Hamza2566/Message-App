import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/root.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './App.jsx'
import Login from './components/login/login.jsx';
import Signup from './components/signup/signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  
   children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
