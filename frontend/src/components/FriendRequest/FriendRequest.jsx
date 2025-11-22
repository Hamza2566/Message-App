import React from "react";
import { useEffect, useState } from "react";
import styles from "./friendRequest.module.css";

export default function Request({ onClose }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3500/api/users");
        const data = await res.json();
        setUsers(data)
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleAddFriend = async (id) => {
    try {
      await fetch(`/api/friend-request/${id}`, {
        method: "POST",
      });
      alert("Friend request sent!");
    } catch (error) {
      console.error("Error sending request", error);
    }
  };


 console.log(users);
 
  

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        <div className={styles.list}>
          {users.map((user) => (
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