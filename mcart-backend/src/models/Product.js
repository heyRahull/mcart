import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true, unique: true },
    productName: { type: String, required: true },
    productCode: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    osType: { type: String, required: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
