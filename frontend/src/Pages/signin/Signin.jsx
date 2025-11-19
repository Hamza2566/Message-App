import React from "react";

import { useState } from "react"
import style from "./signin.module.css"
export default function SignIn() {
  const [data,setdata] = useState({})

   const handlesubmit = (e)=>{
    e.preventDefault()
    const username =  e.target.username.value
    const password = e.target.password.value

      setdata({
        username,
        password
      })
      response(data)
   }   
   function response(data) {
    fetch("http://localhost:3500/api/auth/signin",{
    method: "POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
   })
   .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
   }

  return (
    <div className={style.SignIn}>
      <h2>Sign In</h2>
      <form className={style.SignInFrom} onSubmit={handlesubmit}> 
        <input placeholder="username" type="username" name="username" /><br />
        <input placeholder="Password" type="password" name="password"/><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}