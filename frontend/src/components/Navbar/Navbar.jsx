import React, { useState } from 'react'
import style from "./Navbar.module.css"
import {  Link } from 'react-router-dom';
import Request from '../FriendRequest/FriendRequest';


function Navbar() {
  const [FriendRequest , setfriendrequest] = useState(false)
  const handleFriendRequest = ()=>{
    setfriendrequest(true)
  }
  return (
    <div className={style.NavbarWrapper}>
      <div className={style.NavbarImg}>
        <Link to="/dashboard" className={style.Link}>
        <img src="./message.png" alt="" />
        <h2>Chatterly</h2>
        
        </Link>
      </div>
      <div>
        { FriendRequest && <Request />}
      </div>
      <div className={style.FriendRequest} onClick={handleFriendRequest}>
        <h3>Friend Requests</h3>
      </div>
      <div className={style.NavbarSign}>
        <h1>Signin</h1>
      </div>
    </div>
  )
}

export default Navbar
