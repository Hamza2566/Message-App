import { createUser, findUserByUsername } from "../services/userServices.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function  signup(req,res) {
     try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Username and password are required" });
            
        }
        const existingUser = findUserByUsername(username);
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const hashed = await bcrypt.hash(password,10)
        const user = await createUser({username,password:hashed})
        const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "7d",
    });
       return res.status(201).json({ success: true, user: { id: user.id, username: user.username }, token });


     } catch (error) {
          console.error("signup error", err);
    return res.status(500).json({ error: "Internal server error" });
     }
  
}


export async function signin(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // compare passwords
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // generate JWT
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({ success: true, user: { id: user.id, username: user.username }, token });
  } catch (err) {
    console.error("signin error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}