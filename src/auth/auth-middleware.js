import jwt from "jsonwebtoken";

/* import path from 'path';
const envPath = path.join(__dirname, '../process.env');
dotenv.config({ path: envPath }); */

const SECRET_KEY = process.env.SECRET;

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_KEY);
    console.log('token is verified :)');
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
