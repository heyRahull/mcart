import {
  getAllUsersCart,
  getPerUserCart,
  addToCart,
} from "../services/cartService.js";

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
  try {
    const { username } = req.params;
    const details = await getPerUserCart(username);
    res.status(200).json({
      success: true,
      message: `Successfully fetched details for the user: ${username}`,
      details: details,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const addToCartController = async (req, res) => {
  try {
    const details = await addToCart(req.body);
    if (details.status === "CREATED") {
      res.status(200).json({
        success: true,
        message: `New items got inserted into the cart with the ID : ${details.cartId}`,
        details: details,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User's cart is already available, append to the same cart",
        details: details,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: true,
      error: err.message,
    });
  }
};
