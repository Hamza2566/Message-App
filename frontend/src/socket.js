import { useEffect } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3501", {
  withCredentials: true
});

socket.on("connect", () => {
  console.log("Connected to socket!", socket.id);
});




