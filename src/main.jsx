import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage'
import { createBrowserRouter } from 'react-router'


const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <HomePage/>
  
  </StrictMode>,
)
