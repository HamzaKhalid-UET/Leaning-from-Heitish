import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },

  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
