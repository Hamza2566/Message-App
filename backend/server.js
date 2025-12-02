import express from "express"
import authrouter from "./routes/auth.js"
import dotenv from "dotenv"
const port = process.env.PORT || 3500 
import cors from "cors"
import cookieParser from "cookie-parser";
import refreshroute from "./routes/refresh.js"
import users from "./routes/users.js"
import friendrequest from "./routes/friendrequest.js"
import friendAccept from "./routes/friendaccept.js"
import friends from "./routes/friends.js"


dotenv.config()
const app = express()
app.use(cors({
    origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}
))

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth",authrouter)
app.use("/api/auth",refreshroute)
app.use("/api/users",users)
app.use("/api/friends",friends)
app.use("/api/friend-request",friendrequest)
app.use("/api/friend-accept",friendAccept)







app.listen(port,()=>{
    console.log(`server is up running on ${port}`);
})