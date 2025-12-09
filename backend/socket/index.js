import { Server } from "socket.io";

const io = new Server(3501, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("Received from socket:", data);

    // Broadcast to all clients except sender
    // socket.broadcast.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

console.log("Socket.IO server running on port 3501");
