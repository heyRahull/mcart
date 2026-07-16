import { Cart } from "../models/Cart.js";
import { Order } from "../models/Order.js"

export const placeOrder = async (username, orderAmount) => {
    const cart = await Cart.findOne({username, statusOfCart : "Open"});

    if(!cart){
        throw new Error('No active open cart found to checkout');
    }

    const lastOrder = await Order.findOne().sort({ orderId: -1 });
    const newOrderId = lastOrder && lastOrder.orderId ? lastOrder.orderId + 1 : 2001;

    await Order.create({
        orderId: newOrderId,
        cartId:cart.cartId,
        orderAmount: orderAmount
    });

    cart.statusOfCart = "Closed";
    cart.dateOfModification = new Date().toLocaleDateString('en-GB');
    await cart.save();

    return newOrderId;
}