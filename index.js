import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import userRouter from "./router/userRouter.js";

// connect to MongoDB
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  
