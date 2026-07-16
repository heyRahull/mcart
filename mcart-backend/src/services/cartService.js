import { Cart } from "../models/Cart.js";

export const getAllUsersCart = async () => {
  const allUsersCartDetails = await Cart.find({});
  return allUsersCartDetails;
};

export const getPerUserCart = async (username) => {
  const cartDetail = await Cart.findOne({ username });
  return cartDetail;
};

export const addToCart = async (details) => {
  const { username, productsInCart } = details;

  //1. Look for an active open cart for this user
  let cart = await Cart.findOne({ username, statusOfCart: "Open" });

  if (!cart) {
    // 2. No cart exists -> Generate a sequential ID starting at 101
    // We sort by cartId descending to find the highest existing cartId
    const lastCart = await Cart.findOne().sort({ cartId: -1 });
    const newCartId = lastCart && lastCart.cartId ? lastCart.cartId + 1 : 101;

    // 3. Create the new cart
    await Cart.create({
      cartId: newCartId,
      username,
      productsInCart,
      statusOfCart: "Open",
      dateOfCreation: new Date().toLocaleDateString("en-GB"), // formats like DD/MM/YYYY
      dateOfModification: new Date().toLocaleDateString("en-GB"),
    });

    return {
      status: "CREATED",
      cartId: newCartId,
    };
  } else {
    // 4. Cart exists -> Merge productsInCart
    productsInCart.forEach((newItem) => {
      // Check if this product is already in the cart
      const existingProduct = cart.productsInCart.find(
        (item) => item.productId === newItem.productId,
      );

      if (existingProduct) {
        // If product is already there, update the quantity
        existingProduct.quantity += newItem.quantity;
      } else {
        // If it's a brand new product, add it to the array
        cart.productsInCart.push(newItem);
      }
    });

    cart.dateOfModification = new Date().toLocaleDateString("en-GB");
    await cart.save();

    return {
      status: "APPENDED",
      cartId: cart.cartId,
    };
  }
};

export const updateCartProducts = async (username, productsInCart) => {

  const cart = await Cart.findOne({username, statusOfCart: 'Open'});

  if(!cart){
    return null;
  }

  cart.productsInCart = productsInCart;
  cart.dateOfModification = new Date().toLocaleDateString('en-GB');

  await cart.save();
  return cart;

}