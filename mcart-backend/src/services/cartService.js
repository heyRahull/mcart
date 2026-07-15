import { Cart } from "../models/Cart.js";

export const getAllUsersCart = async () => {
        const allUsersCartDetails = await Cart.find({});
        return allUsersCartDetails;   
}