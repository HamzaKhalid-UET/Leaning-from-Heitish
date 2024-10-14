import mongoose from "mongoose";

const userSchema =new  mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("Users", userSchema);
