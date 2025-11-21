import express from "express"
import authrouter from "./routes/auth.js"
import dotenv from "dotenv"
const port = process.env.PORT || 3500 
import cors from "cors"
import cookieParser from "cookie-parser";
import refreshroute from "./routes/refresh.js"


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

app.get("/",(req,res)=>{
    res.json({message:"Hi from Backend"})
})







app.listen(port,()=>{
    console.log(`server is up running on ${port}`);
})