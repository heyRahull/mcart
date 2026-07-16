import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: {type: Number, required: true, unique: true},
    cartId: {type: Number, required: true},
    orderAmount: {type: Number}
}, {timestamps: true});

export const Order = mongoose.model('Order', orderSchema);