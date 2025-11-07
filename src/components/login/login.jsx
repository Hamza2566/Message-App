import style from "./login.module.css";


function Login() {
   const handleSubmit = async (e)=>{
    e.preventDefault()
   const data = {
  username: e.target.username.value,
  password: e.target.password.value
};
   
   const response = await fetch('/api/login',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
    
   })
  const result = await response.json();      // Convert backend’s response → JS
  console.log(result);
    console.log("form submitted");

    
   }
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.formwrapper}>
        <div className={style.header}>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
            <input type="text" name="username"/>
             <label htmlFor="name">Password</label>
            <input type="password" name="password" id="password" />
          <button type="submit">Submit</button>
        </form>
      </div>

    

        
    </div>
    </>
  )
}

export default Login
