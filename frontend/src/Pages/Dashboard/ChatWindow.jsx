import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import style from "./ChatWindow.module.css"
import Button from '../../components/button';
import { socket } from '../../socket';

function ChatWindow() {
  const location = useLocation();
  const userData = location.state;
  
  const { id } = useParams();

  // Separate state: messages array + input string
  const [messages, setMessages] = useState([]);      // <-- default to []
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:9500/api/message/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include"
        });

        const result = await res.json();
        console.log(result);
        
        // Inspect result shape in devtools; adjust below if API returns {messages: [...]}
        // console.log("fetch result:", result);
        if (Array.isArray(result)) {
          setMessages(result);
        } else if (Array.isArray(result?.messages)) {
          setMessages(result.messages);
        } else {
          // fallback: if API returns a single object, put it into an array
          setMessages(result ? [result] : []);
        }
      } catch (error) {
        console.log("fetch error:", error);
      }
    };

    fetchMessages();
  }, [id]);
 

  const handleChange = (event) => {
    setInputMessage(event.target.value);
  };

  // onSend passed to Button so parent can update state and clear input
  const handleSend = (sentMessage) => {
    // optimistic update: append the new message to messages
    const newMsgObj = {
      content: sentMessage,
      createdAt: new Date().toISOString(),
      // add other fields your UI expects (senderId, etc.)
    };
    setMessages(prev => [...prev, newMsgObj]);
    setInputMessage(""); // clear input after send
  };
   useEffect(() => {
 socket.on("receiveMessage", (data) => {
  console.log("New message:", data);
  setMessages(prev => [...prev, data]);
  
});

return () => socket.off("receiveMessage");
}, []);

console.log("all message",messages);

  return (
    <div className={style.ChatWindowWrapper}>
      <div className={style.userheader}>
        <h2>{userData?.username}</h2>
        <h3>{userData?.email}</h3>
      </div>

      <div className={style.messagewindow}>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={style.singlemessage}>
              {msg.content ?? msg.text ?? JSON.stringify(msg)}
            </div>
          ))
        ) : (
          <div className={style.nomessage}>Start messaging...</div>
        )}
      </div>

      <div className={style.messagesend}>
        <input
          type="text"
          className={style.inputmessage}
          name="message"
          id="message"
          value={inputMessage}
          onChange={handleChange}
        />
        <Button message={inputMessage} id={id} onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatWindow;
