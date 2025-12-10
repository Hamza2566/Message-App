import prisma from "./backend/prisma/prisma.js";




async function main() {
  try {
    // Add a new message to the database
    const newMessage = await prisma.message.create({
      data: {
        senderId: 9,    // Change this to actual sender ID
        receiverId: 8,  // Change this to actual receiver ID
        content: "Hello, this is a test message!",
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

main();