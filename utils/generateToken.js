import jwt from "jsonwebtoken";

// creates a signed JWT containing the user's id
// used after signup/login so the client can stay authenticated
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export default generateToken;
