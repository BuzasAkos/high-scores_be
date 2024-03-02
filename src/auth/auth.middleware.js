import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET;

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_KEY);
    console.log('token is verified :)');
    next();
  } catch (error) {
    console.log('Auth failed', SECRET_KEY, token);
    res.status(401).json({ message: "Auth failed!" });
  }
};
