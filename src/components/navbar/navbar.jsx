import { Link } from "react-router";
import style from "./navbar.module.css";


import React from 'react'

function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img src="./logo.webp" alt="" />
      </div>
       <Link to="/signup">Home</Link>
        
    </div>
  )
}

export default Navbar
