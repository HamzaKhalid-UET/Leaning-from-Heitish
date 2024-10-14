import mongoose from "mongoose";

const productSchema = new mongoose.schema(
  {
    description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const product = mongoose.model("Product", productSchema);
