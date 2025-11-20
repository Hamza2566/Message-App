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
    
    