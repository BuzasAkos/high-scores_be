import dotenv from 'dotenv';
import app from "./src/app.js";
import sitemap from 'express-sitemap-html';

dotenv.config();
const PORT = process.env.PORT || 3000;

sitemap.swagger('HighScores app', app);

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
