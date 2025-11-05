import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch('/api/message') 
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("Error fetching message:", error);
        setMessage("Failed to load message");
      });
  }, [])

  
  return (
    <>

      <Navbar/ >
      <h1>{message}</h1>
    </>
  )
}

export default App
