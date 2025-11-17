import style from "./signin.module.css"
export default function SignIn() {

   const handlesubmit = (e)=>{
    e.preventDefault()
    const username =  e.target.username.value
    const password = e.target.password.value

    const data = {
      username,
      password
    }
    console.log(data);
    

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