import { getAllUsersCart, getPerUserCart } from "../services/cartService.js";

export const getAllUsersCartController = async (req, res) => {
  try {
    const details = await getAllUsersCart();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all users cart details",
      details: details,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const getPerUserCartController = async (req, res) => {
    try{
        const {username} = req.params
        const details = await getPerUserCart(username);
        res.status(200).json({
            success: true,
            message: `Successfully fetched details for the user: ${username}`,
            details: details
        })

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}