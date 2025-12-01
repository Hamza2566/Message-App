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

export const sendFriendRequest = async (req,res) =>{
     const receiverId = Number(req.params.id) ; // the user I want to add
    const senderId = req.user.userId;       // 👈 CURRENT USER ID from token

    console.log("Current user:", senderId);
    console.log("Friend to add:", receiverId);


    try {
        // check if a request already exists
        const existing = await prisma.friendRequest.findFirst({
            where: {
                senderId,
                receiverId,
                status: "pending"
            }
        });

        if (existing) {
            return res.status(400).json({ message: "Request already sent" });
        }

        const request = await prisma.friendRequest.create({
            data: {
                senderId,
                receiverId,
            }
        });

        res.json(request);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}
export const getIncomingRequests = async (req, res) => {
    const userId = req.user.userId;
    console.log(userId);
    

    try {
        const incoming = await prisma.friendRequest.findMany({
            where: {
                receiverId: userId,
                status: "pending"
            },
            include: {
                sender: true
            }
        });

        res.json(incoming);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Could not load requests" });
    }
}; 




 export const addFriend = async (req,res) => {
 
  
  

  
  const friendtoadd = Number(req.params.id)
    const senderId = req.user.userId;       // 👈 CURRENT USER ID from token
     console.log("Current user:", senderId);
    console.log("Friend to add:", friendtoadd);
}