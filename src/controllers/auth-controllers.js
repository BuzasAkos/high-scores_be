const jwt = require("jsonwebtoken");
const UserModel = require("../models/auth-models");

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../process.env')});
const SECRET_KEY = process.env.SECRET;



exports.login = (req, res) => {
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

exports.signup = async (req, res) => {
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
