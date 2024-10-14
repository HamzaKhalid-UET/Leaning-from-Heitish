import mongoose from "mongoose";
import { Category } from "./category";

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
    price: {
      type: String,
      default: 0,
    },
    stock: {
      type: String,
      default:0
    },
    Category:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }, 

    owner:{
        type:mongoose.schema.Types.ObjectId,
        ref:"Users"
    }
  },
  { timestamps: true }
);

export const product = mongoose.model("Product", productSchema);
