import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/order.model.js";
import { Customer } from "../models/customer.model.js";

export const createOrder = async (req, res) => {
  try {
    const { customerId, orderAmount, product } = req.body;

    // Validate input fields
    if ([customerId, orderAmount].some((field) => !field)) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    // Check if the customer exists
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json(new ApiError(404, "Customer not found"));
    }

    // Create a new order
    const newOrder = await Order.create({
      customerId,
      orderAmount,
      product,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newOrder, "New order created"));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Something went wrong"));
  }
};
