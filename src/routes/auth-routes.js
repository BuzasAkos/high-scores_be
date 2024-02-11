const express = require('express');
const AuthController = require("../controllers/auth-controllers");

const router = express.Router();

router.post('/login', AuthController.login);

router.post('/signup', AuthController.signup);

module.exports = router
