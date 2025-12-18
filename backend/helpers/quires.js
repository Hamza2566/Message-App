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
    
export const getFriends = async (req,res) => {
  const myid = req.user.userId
  try {
     const users =  await prisma.friendRequest.findMany({
       where: {
    status: "accepted",
    OR: [
      { senderId: myid },
      { receiverId: myid }
    ]
  },
  include: {
  sender: true,
  receiver: true
}

  });
  const friends = users.map(fr => {
  if (fr.senderId === myid) return fr.receiver;

  return fr.sender;
});


 
  return res.json(friends)
  
  } catch (error) {
    console.log(error);
    return res.json({ message: "error fetching Users"})
  }
 
};

export const getUsers = async (req,res) => {
  const myid   = req.id.userId
  
  try {
    const users = await prisma.user.findMany({
      where:{
        id:{not:myid},
        AND:[
          {
            sentRequests:{
              none:{
                receiverId:myid
              }
            }
          },
          {
            receivedRequests:{
              none:{
                senderId:myid
              }
            }
          },
          {
            OR: [
          {
            SentRequests: {
              none: {
                receiverId: myid,
                status: "accepted"
              }
            }
          },
          {
            ReceivedRequests: {
              none: {
                senderId: myid,
                status: "accepted"
              }
            }
          }
        ]
          }
        ]

    }
      

    });    
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
 
  const senderId = Number(req.params.id)
  // console.log(req.params);
  // console.log(req.user);
  
  
    const receiverId = req.user.userId;       // 👈 CURRENT USER ID from token
     console.log("Current user:", senderId);
    console.log("Friend to add:", receiverId);



    try {
       const existing = await prisma.friendRequest.findFirst({
            where: {
                senderId,
                receiverId,
                status: "pending"
            }
        });
        if (!existing) throw new Error("No friend request found");
        console.log(existing);
//         senderId   | 8
// receiverId | 9
// status     | pending
        
       const addfriend = await prisma.friendRequest.update({
        where:{id:existing.id},
        data:{status:"accepted"}
       })

       console.log(addfriend);
       
       

      
    } catch (error) {
       console.log(error);
        res.status(500).json({ message: "Something went wrong when adding the friend" });
      
    }





}


 export const getmessages =  async (req,res) =>{
    // const id  = req.params.id
    // console.log("this is for the user id",id);
    // console.log("this is my id",req.user.userId);

    const myid = req.user.userId
    const userid = Number(req.params.id)
    
    
    


  try {
    const getmessage = await prisma.message.findMany({
       where: {
        OR: [
        
          { senderId: myid, receiverId: userid },
          { senderId: userid, receiverId: myid }
        ]
      },
            orderBy: {
        createdAt: "asc"
      }

    })
    
    res.json(getmessage)
    
  } catch (error) {
    console.log(error);
    
  }

}


export const sendmessage = async (req,res) => {
    const myid = req.user.userId
    const userid = Number(req.params.id)
    const message = req.body.message

    
   try {
    // Add a new message to the database
    const newMessage = await prisma.message.create({
      data: {
        senderId: myid,    // Change this to actual sender ID
        receiverId: userid,  // Change this to actual receiver ID
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

