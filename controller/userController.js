import User from "../model/userModel.js";
import { registerUser, loginUser } from "../services/authService.js";

// @desc    Register a new user
// @route   POST /api/users/signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const result = await registerUser({ name, email, password });
    res.status(201).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/users/login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const result = await loginUser({ email, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

// @desc    Get all users (just to demonstrate reading from DB)
// @route   GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // never send password back
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
