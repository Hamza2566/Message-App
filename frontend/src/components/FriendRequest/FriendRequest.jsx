import React from "react";
import { useEffect, useState } from "react";
import styles from "./friendRequest.module.css";

export default function Request({ onClose }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [incoming,setincoming] = useState()
   
const currentUserId = localStorage.getItem("user")
    const token = localStorage.getItem("token")


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:9500/api/users",{
           method :"GET",
           headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        credentials:"include",
        });
        const data = await res.json();
        setUsers(data)        
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    const fetchincoming = async ()=>{
    const token = localStorage.getItem("token")
      try {
        const res = await fetch("http://localhost:3500/api/friend-request",{
          method :"GET",
           headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        credentials:"include",
        });
        const incoming  = await res.json();
        console.log(incoming);
        
        setincoming(incoming)
        
      } catch (error) {
        console.error("error for fetching incoming requests");
        
      }
    }
    fetchUsers();
    fetchincoming()
  }, []);

  const handleAddFriend = async (id) => {
    console.log(token);
    
    try {
      await fetch(`http://localhost:3500/api/friend-request/${id}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        credentials:"include",
      });
      alert("Friend request sent!");
    } catch (error) {
      console.error("Error sending request", error);
    }
  };
const AcceptBtn = async (id) => {
  console.log(id);
  
  try {
    const res = await fetch(`http://localhost:3500/api/friend-accept/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
      body: JSON.stringify({ id })
    });

    // const text = await res.text();   // Read raw text from server
    // console.log("Server response:", text);

  } catch (error) {
    console.error("Error sending request", error);
  }
};





 
  

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

       
        <div className={styles.incoming}>
          <h3>Friend Request</h3>
          {incoming?.length > 0 ? (
         incoming.map((request) => (
    <div key={request.id} className={styles.requestCard}>
      
      <span>{request.sender.username}</span>

      <button
        className={styles.AcceptBtn}
        onClick={() => AcceptBtn(request.sender.id)}
      >
        Accept Request
      </button>
    </div>
  ))
) : (
  <p>No incoming requests</p>
)}

        

        </div>

        <div className={styles.list}>
          <h2>Friends Recommend</h2>
          {users
          .map((user) => (
            <div key={user.id} className={styles.userCard}>
              <span>{user.username}</span>
              <button
                className={styles.addBtn}
                onClick={() => handleAddFriend(user.id)}
              >
                Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}