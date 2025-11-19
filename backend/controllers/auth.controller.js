
import { getUserByName } from "../helpers/quires.js";



export function signup(req,res) {
     res.json({ message: "HI from signup controller" })
}



export  async function  signin(req,res) {
     console.log(req.body);
   const username =  req.body.username
   const password = req.body.password

   if (!username || !password) {return res.json({message:"Invalid Credentails"})}
   
   const user =  await getUserByName(username)

   console.log("user was found ",user , user.password) 
}