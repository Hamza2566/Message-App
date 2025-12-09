import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import authrouter from "./routes/auth.js";
import refreshroute from "./routes/refresh.js";
import users from "./routes/users.js";
import friendrequest from "./routes/friendrequest.js";
import friendAccept from "./routes/friendaccept.js";
import friends from "./routes/friends.js";
import message from "./routes/message.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

// CORS only for REST API
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authrouter);
app.use("/api/auth", refreshroute);
app.use("/api/users", users);
app.use("/api/friends", friends);
app.use("/api/friend-request", friendrequest);
app.use("/api/friend-accept", friendAccept);
app.use("/api/message", message);

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
