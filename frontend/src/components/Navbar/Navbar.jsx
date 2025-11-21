import React from 'react'
import style from "./Navbar.module.css"
import {  Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className={style.NavbarWrapper}>
      <div className={style.NavbarImg}>
        <Link to="/dashboard" className={style.Link}>
        <img src="./message.png" alt="" />
        <h2>Chatterly</h2>
        
        </Link>
      </div>
      <div className={style.NavbarSign}>
        <h1>Signin</h1>
      </div>
    </div>
  )
}

export default Navbar
