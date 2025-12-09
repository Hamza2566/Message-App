import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import style from  "./ChatWindow.module.css"
import Button from '../../components/button';

function ChatWindow() {
  const location  = useLocation()
  const [message,setmessage] = useState()

  const userData = location.state;
  const {id}  = useParams()

  
  
  useEffect(()=>{
    const fetchuser = async () =>{
      try {
         const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:9500/api/message/${id}`,{
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
  },[id])

  const handlechange = (event)=>{
     const value = event.target.value;
     setmessage(value)
  }
  
  
  return (
    <div className={style.ChatWindowWrapper}>
      <div className={style.userheader}>
       <h2>
        {userData.username}
        
        </h2>
        <h3>
          {userData.email}</h3> 
      </div>
      <div className={style.messagewindow}></div>
      <div className={style.messagesend}>
        <input type="text" className={style.inputmessage} name="message" id="message" onChange={handlechange} />
        <Button message={message} id={id}/>
      </div>
    </div>
  )
}

export default ChatWindow
