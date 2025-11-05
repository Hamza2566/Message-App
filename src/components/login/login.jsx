import style from "./login.module.css";


function Login() {
   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("form submitted");

    
   }
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.formwrapper}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="hamza" placeholder="Enter name" />
          <button type="submit">Submit</button>
        </form>
      </div>

    

        
    </div>
    </>
  )
}

export default Login
