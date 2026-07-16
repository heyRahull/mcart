import express from 'express';
import {register, login} from '../controllers/userController.js';
import { getAllMobiles, getAllTablets, deleteProductController } from '../controllers/productController.js';
import {getAllUsersCartController, getPerUserCartController, addToCartController, updateCartController} from '../controllers/cartController.js';
import { postOrderController } from '../controllers/orderController.js';
const router = express.Router();


router.post('/signup', register);
router.post('/login', login);
router.get('/mobiles', getAllMobiles);
router.get('/tablets', getAllTablets);
router.get('/carts', getAllUsersCartController);
router.get('/carts/:username', getPerUserCartController);
router.post('/carts', addToCartController);
router.put('/carts/:username', updateCartController);
router.post('/orders/:username', postOrderController);
router.delete('/products/:product', deleteProductController)

export default router;