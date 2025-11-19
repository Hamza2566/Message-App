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
     

    
    