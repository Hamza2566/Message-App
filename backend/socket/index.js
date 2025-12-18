import { Server } from "socket.io";
import prisma from "../prisma/prisma";

export const io = new Server(3501, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"],
    credentials: true
  }
});

export const users = {}; // { userId: socket.id }

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("register", (userId) => {
    
    users[userId] = socket.id;
    console.log("User registered:", userId, socket.id);
    console.log(users);
  });
  

  socket.on("sendMessage", (data) => {
  console.log("Received from socket:", data);
  
  
  
  const receiverSocketId = users[data.to];

  if (receiverSocketId) {
    io.to(receiverSocketId).emit("receiveMessage", data);

  }
  else{
    async function name(params) {
        
   try {
    // Add a new message to the database
    const newMessage = await prisma.message.create({
      data: {
        senderId: userId,    // Change this to actual sender ID
        receiverId: data.to,  // Change this to actual receiver ID
        content: data.content,
        // createdAt will be automatically set to now()
      },
    });

    console.log('Message created successfully:');
    console.log(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
  } finally {
    await prisma.$disconnect();
  }

      
    }
    name()

  }
  
   socket.on("disconnect", () => {
  for (const userId in users) {
    if (users[userId] === socket.id) {
      delete users[userId];
      break;
    }
  }
  console.log("Users after disconnect:", users);
});


});



})

console.log("Socket.IO server running on port 3501");

