import dotenv from 'dotenv';
import app from "./src/app.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});