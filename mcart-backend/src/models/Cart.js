import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cartId: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    productsInCart: [{ 
        productId: {type: Number, required: true},
        productName: {type: String, required: true},
        quantity: {type: Number, required: true}
     }],
    statusOfCart: { type: String, required: true },
    dateOfCreation: { type: String, default: () => new Date().toLocaleDateString('en-GB') },
    dateOfModification: { type: String, default: () => new Date().toLocaleDateString('en-GB') }
  },
  { timestamps: true },
);

export const Cart = mongoose.model("Cart", cartSchema);
