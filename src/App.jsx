import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function  App() {
  const [info, setinfo] = useState()
  const data = {
    
    "Name": "hamza"

  }




  const response = await fetch('/api/auth/signup',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
    
   })
  const result = await response.json();      // Convert backend’s response → JS
  console.log(result);

    
  
  return (
    <>
    <h1>hi</h1>
    </>
  )
}


export default App
