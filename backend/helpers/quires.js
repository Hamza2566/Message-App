import prisma from "../prisma/prisma.js"

export async function getUserByName(name) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: name
      }
    })
     return user
       } catch (error) {
    console.error('Error fetching user by name:', error)
    throw error
  }
}
     
export async function Lookusername(username) {
  try {
   const user = await prisma.user.findUnique({
    where:{
      username: username
    }
  
   }) 
   return user
  } catch (error) {
     console.error('Error fetching user by name:', error)
    throw error
  }
  
}


export async function createUser(UserData) {

  
  try {
    const AddUser = await prisma.user.create({
    data:UserData,
  })
  return AddUser
  
    
  } catch (error) {
      console.error('Error Creating user :', error)
    throw error
    
  }
}
    
const getFriends = async (userId) => {
  return await prisma.friendRequest.findMany({
    where: {
      status: "accepted",
      OR: [
        { senderId: userId },
        { receiverId: userId }
      ]
    },
    include: {
      sender: true,
      receiver: true
    }
  });
};
export const getUsers = async (req,res) => {
  try {
    const users = await prisma.user.findMany();    
   return res.json(users)    

  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addfriend = async (req,res) =>{
    const id = req.params.id; // get the user ID from the URL
  console.log("Friend request for user:", id);
  // handle friend request logic here
}