import express from "express";
import { signin, signup } from "../controllers/authcontrollers.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/signin
router.post("/signin", signin);

export default router;
