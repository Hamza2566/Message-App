import { Server } from "socket.io";

const io = new Server(3501, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"],
    credentials: true
  }
});

const users = {}; // { userId: socket.id }

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("register", (userId) => {
    console.log(userId);
    
    users[userId] = socket.id;
    console.log("User registered:", userId, socket.id);
  });

  socket.on("sendMessage", (data) => {
    console.log("Received from socket:", data);

    const receiverSocket = users[data.to]; // find receiver

    if (receiverSocket) {
      io.to(receiverSocket).emit("receiveMessage", data);
    }
  });


  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

console.log("Socket.IO server running on port 3501");
