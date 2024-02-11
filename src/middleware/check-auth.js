const jwt = require("jsonwebtoken");

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../process.env')});
const SECRET_KEY = process.env.SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_KEY);
    console.log('token is verified :)');
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
