import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [info, setInfo] = useState()
  const data = {
    "Name": "hamza"
  }

  async function fetchData() {  // Renamed the function
    try {
      const response = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      console.log(result.message);
      
      setInfo(result)
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  useEffect(() => {
    fetchData()  // Call the function inside useEffect
  }, [])  // Empty dependency array to run only once

  return (
    <>
      <h1>{info?.message}</h1>
    </>
  )  
}

export default App