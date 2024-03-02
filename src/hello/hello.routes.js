import express from 'express';
import { getMessage } from "./hello.controller.js";

const router = express.Router();


// API routes

router.get('/', getMessage);


export default router;