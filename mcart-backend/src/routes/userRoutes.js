import express from 'express';
import {register, login} from '../controllers/userController.js';
import { getAllMobiles, getAllTablets } from '../controllers/productController.js';
import {getAllUsersCartController, getPerUserCartController, addToCartController, updateCartController} from '../controllers/cartController.js'
const router = express.Router();


router.post('/signup', register);
router.post('/login', login);
router.get('/mobiles', getAllMobiles);
router.get('/tablets', getAllTablets);
router.get('/carts', getAllUsersCartController);
router.get('/carts/:username', getPerUserCartController);
router.post('/carts', addToCartController)
router.put('/carts/:username', updateCartController)

export default router;