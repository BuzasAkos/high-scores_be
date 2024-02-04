const express = require('express');
const ScoreController = require("../controllers/score-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();


// API routes

router.get('/list', ScoreController.getScores);

router.get('/:id', ScoreController.getScore);

router.put('/:id', ScoreController.changeScore);

router.post('/add', checkAuth, ScoreController.newScore);

router.delete('/:id', checkAuth, ScoreController.delScore);

module.exports = router