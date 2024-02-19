import jwt from "jsonwebtoken";
import UserModel from "./auth-models.js";
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET;

export const login = (req, res) => {
    const { email, password } = req.body;
    console.log('login api called with', email);
    
    const token = jwt.sign(
        { username: email },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        token: token,
        expiresIn: 3600
    });
}

export const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log('signup api called with', email);

  try {  
    // Check if the provided name already exists
    const existingUser = await UserModel.findOne({ email: email });
  
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new document and save it to the collection
    const newUser = new UserModel({ email: email });
    const savedUser = await newUser.save();

    res.status(201).json({
        user: savedUser
    })
  } catch (error) {
        console.error('Error adding new user:', error);
        res.status(500).json({ error: error });
  }
}

