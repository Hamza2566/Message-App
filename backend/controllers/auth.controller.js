import { createUser, getUserByName, Lookusername } from "../helpers/quires.js";
import { generateAccessToken, generateRefreshToken } from "../jwt/jwt.js";
import bcrypt from "bcryptjs"



export async function signup(req,res) {
     const username =  req.body.username
     const email = req.body.email
     const password = req.body.password
        if (!username || !email || !password) { return res.json("Invalid Credentails")}

   
    
   
   const isTaken = await Lookusername(username)
   console.log(username);
if (isTaken)   {return  res.json("Username is already taken");} 
 
    const hashpassword = await bcrypt.hash(password,10)

    const UserData = {username, email , password: hashpassword}

    const AddUser = await createUser(UserData)
    res.json(AddUser)
}

export  async function  signin(req,res) {
     console.log(req.body);
   const username =  req.body.username
   const password = req.body.password

   if (!username || !password) {return res.json({message:"Invalid Credentails"})}
   
   const user =  await getUserByName(username)
   
   if (!user) {
   return res.status(404).json({ error: "User not found" });
   // or throw new Error("User not found");
 }

   const match =  await bcrypt.compare(password,user.password)

   if (!match) {return res.status(404).json({ message: "Wrong Password" });} 

   
   


 const AccessToken = generateAccessToken(user)
 const RefreshTOken = generateRefreshToken(user)

 
   console.log("refreshtoken", RefreshTOken);
 res.cookie("refreshToken", RefreshTOken, {
   httpOnly: true,
   secure: false,       // HTTPS only if secure: true
   sameSite: "lax",
   path: "/",
   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.json({
    "user was found ":{id: user.id, username: user.username } , 
    "Token": AccessToken,
  }) 

}