import React, { useEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import  style from'./HomePage.module.css'; 
import { socket } from "../../socket.js";

export default function HomePage() {
  useEffect(() => {
  const myId = localStorage.getItem("UserId");
  socket.emit("register", myId);
}, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* LEFT SIDE */}
      <div  className={style.leftside}>
        <h1>Chatterly</h1>
        <img src="././message.png" alt="" className={style.img} />
        <p>Connect with friends instantly and chat in <span className={style.unique}>Chatterly.</span></p>
      </div>
       {/* RIGHT SIDE */}
      <div  className={style.rightside}>
        {/* Child routes render here */}
        <Outlet />

        {/* Links to switch */}
        <div className={style.switch}>
          <Link to="/" className={style.link}>Sign In</Link> | <Link to="/signup"   className={style.link}>Sign Up</Link>
        </div>

     </div>
    </div>

  );
}
