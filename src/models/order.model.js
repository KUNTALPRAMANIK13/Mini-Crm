import mongoose from "mongoose";

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    orderAmount: {
      type: Number,
      required: true, // Ensure order amount is always provided
      min: [0, "Order amount must be positive"], // Validation for order amount
    },
    product: { type: String, required: true },
    orderDate: {
      type: Date,
      required:true,
      default: Date.now, // Default to current date
    },
  },
  {
    timestamps: true,
  }
);

// Create the Order model
export const Order = mongoose.model("Order", orderSchema);
