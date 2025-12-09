import React from "react";

import style from "./signup.module.css"
export default function SignUp() {
   const handlesubmit = (e)=>{
    e.preventDefault()
    const username =  e.target.username.value
    const email =  e.target.email.value
    const password = e.target.password.value

    const data = { username,email,password}

     response(data)
   }
    function response(data) {
    fetch("http://localhost:9500/api/auth/signup",{
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
    <div className={style.SignUp}>
      <h2>Sign Up</h2>
      <form className={style.SignUpForm} onSubmit={handlesubmit}>
        <input placeholder="Username"  name="username"/><br />
        <input placeholder="Email" type="email"  name="email"/><br />
        <input placeholder="Password" type="password"  name="password"/><br />
        <input placeholder="confirm-password" type="password" name="confirmpassword" /><br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}