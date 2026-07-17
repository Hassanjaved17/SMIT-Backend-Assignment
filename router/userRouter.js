import express from "express";
import { signup, login, getUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getUsers);

export default router;
