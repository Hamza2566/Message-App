import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import style from "./DashboardLayout.module.css"


export default function DashboardLayout() {
  const [users,setUsers] = useState()

  useEffect(()=>{
    const fetchfriend = async () =>{
    try {
    const token = localStorage.getItem("token")
      const res =  await fetch("http://localhost:3500/api/friends",{
         method :"GET",
           headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        credentials:"include",
      })
      const result = await res.json()
      console.log(result);
      setUsers(result)
    
    } catch (error) {
      console.log(error);
    }
  };
  
    fetchfriend()

  },[])
  
  return (
    <div className={style.DashboardWrapper}>
    <div className={style.Navbardiv}>
      {/* the navbar */}
       <Navbar/>

    </div>
    <div className={style.Messagediv}>

      {/* Sidebar */}
      <div className={style.UserSidebar}>
        <h3 >Friends   </h3>
         {users?.map(user => (
     <button
      key={user.id}
      onClick={() => setActiveChatUser(user)}
      className={style.UserButton} 
    >
      <div className={style.usernames}>
      {user.username}
      </div>
      <div className={style.usermessage}>
        message: you what am i doing here
      </div>
    </button>
  ))}
          
       
      </div>

      {/* Main content */}
      <div className={style.Chatwindow}>
        <Outlet /> {/* DashboardHome or ChatWindow */}
      </div>
    </div>
    </div>
  );
}
