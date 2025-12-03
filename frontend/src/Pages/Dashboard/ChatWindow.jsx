import React, { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import style from  "./ChatWindow.module.css"

function ChatWindow() {
  const location  = useLocation()

  const userData = location.state;
  const {id}  = useParams()
  
  useEffect(()=>{
    const fetchuser = async () =>{
      try {
         const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:3500/api/message/${id}`,{
          headers:{
             "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials:"include"
                    
        })
         const result =  await res.json()
         console.log(result);
         
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchuser()
  })
  
  
  return (
    <div className={style.ChatWindowWrapper}>
      <div className={style.userheader}>
       <h2>
        {userData.username}
        
        </h2>
        <h3>
          {userData.email}</h3> 
      </div>
    </div>
  )
}

export default ChatWindow
