import { placeOrder } from "../services/orderService.js";

export const postOrderController = async (req, res) => {
    try{
        const {username} = req.params
        const {orderAmount} = req.body;
        const orderId = await placeOrder(username, orderAmount);

        res.status(201).json({
            success: true,
            message: `New Order placed with the id: ${orderId}`,
        })
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}