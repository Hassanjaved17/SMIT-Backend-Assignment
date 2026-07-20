import express from "express";
import { signup, login, getUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", signup); // Route for user signup
router.post("/login", login); // Route for user login
router.get("/", getUsers); // Route for getting all users

export default router;
