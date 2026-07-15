import { getAllUsersCart } from "../services/cartService.js";

export const getAllUsersCartController = async (req, res) => {
    try{
        const details = await getAllUsersCart();
        res.status(200).json({
            success: true,
            message: "Successfully fetched all users cart details",
            details : details
        })

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
        
    }
}