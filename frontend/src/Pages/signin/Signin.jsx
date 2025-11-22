import React from "react";

import style from "./signin.module.css"
import { useNavigate } from "react-router";
import { UserContext } from "../../context/Usercontxt.jsx";
import { useContext } from "react";
export default function SignIn() {
  const navigate = useNavigate();
  const {User , setUser}= useContext(UserContext)


   const handlesubmit = (e)=>{
    e.preventDefault()
    const username =  e.target.username.value
    const password = e.target.password.value
  const userData = { username, password };

  console.log("Sending:", userData);

  response(userData);  
   }   
  async function response(data) {
  try {
    const res = await fetch("http://localhost:3500/api/auth/signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json(); // 👈 get JSON from backend
    if (result) {
      localStorage.setItem("user",result.user.username)
    }

    if (result.Token) {
      console.log("Login Success:", result);

      // Save token
      localStorage.setItem("token", result.Token);

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      console.log("Wrong credentials");
    }
  } catch (err) {
    console.error("Login error:", err);
  }
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