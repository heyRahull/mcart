import { Cart } from "../models/Cart.js";

export const getAllUsersCart = async () => {
        const allUsersCartDetails = await Cart.find({});
        return allUsersCartDetails;   
}

export const getPerUserCart = async (username) => {
    const cartDetail = await Cart.findOne({username});
    return cartDetail;
}