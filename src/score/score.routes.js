import express from 'express';
import { getScores, getScore, changeScore, newScore, delScore } from "./score.controller.js";
import checkAuth from "../auth/auth.middleware.js";

const router = express.Router();


// API routes

router.get('/list', getScores);

router.get('/:id', getScore);

router.put('/:id', changeScore);

router.post('/add', checkAuth, newScore);

router.delete('/:id', checkAuth, delScore);

export default router;
