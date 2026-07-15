import express from 'express';
import {register, login} from '../controllers/userController.js';
import { getAllMobiles, getAllTablets } from '../controllers/productController.js';
const router = express.Router();


router.post('/signup', register);
router.post('/login', login);
router.get('/mobiles', getAllMobiles);
router.get('/tablets', getAllTablets);


export default router;