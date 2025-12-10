import React, { useEffect } from "react";
import { socket } from "../socket.js";
import styled from "./button.module.css";

const Button = ({ message, id, onSend }) => {
  useEffect(() => {
    socket.on("connect", () => console.log("Socket connected!", socket.id));
    return () => {
      socket.off("connect");
    };
  }, []);

  const handleClick = async () => {
    if (!message || message.trim() === "") return; // avoid empty sends

    try {
      // Optimistic: notify parent immediately
      if (typeof onSend === "function") onSend(message);

      // Emit via socket
      const UserId = localStorage.getItem("UserId")
      socket.emit("sendMessage", { message, time: Date.now(), to: id  , user:UserId});
        socket.emit("register", UserId);


      // Save message to database
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:9500/api/message/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ message }),
      });

      const result = await res.json();
      console.log("DB response:", result);

      // Optionally, you can reconcile optimistic update with server response here.
    } catch (err) {
      console.error("Send error:", err);
      // Optionally notify parent to remove optimistic message or mark it failed.
    }
  };

  return (
    <button className={styled.button} onClick={handleClick}>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
          </svg>
        </div>
      </div>
      <span>Send</span>
    </button>
  );
};

export default Button;
