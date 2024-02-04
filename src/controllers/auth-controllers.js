const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log('login api called with', email);
    
    const token = jwt.sign(
        { username: email },
        "this_is_secret",
        { expiresIn: "1h" }
    );

    res.status(200).json({
        token: token,
        expiresIn: 3600
    });


}