import React from 'react'
import style from "./signup.module.css";
function Signup() {
  const handleSubmit = async (e)=>{
    e.preventDefault()
   const data = {
  username: e.target.username.value,
  email: e.target.email.value,
  password: e.target.password.value,
  confirmPassword: e.target.confirmpassword.value

};


   const response =  await fetch('/api/signup',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data) 
   })
    const result = await response.json();
    console.log(result);

  }
  return (
    <>
       <div className={style.wrapper}>
            <div className={style.formwrapper}>
              <div className={style.header}>
                <h2>Signup</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                  <input type="text" name="username"/>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                   <label htmlFor="name">Password</label>
                  <input type="password" name="password" id="password" />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input type="password" name="confirmpassword" id="confirmpassword" />
                <button type="submit">Submit</button>
              </form>
            </div>
            </div>
    </>
  
  )
}

export default Signup
