import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Log successful connection

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error if connection fails

    console.log(`MongoDB connection error: ${error.message}`);
    process.exit(1); // stop the server if DB connection fails
  }
};

export default connectDB;
