import { Customer } from "../models/customer.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createCustomer = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input fields
    if ([name, email, phone].some((field) => !field?.trim())) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    // Check for existing user with the same name or email
    const existing_user = await Customer.findOne({
      $or: [{ name }, { email }],
    });

    if (existing_user) {
      return res.status(409).json(new ApiError(409, "User with name or email already exists"));
    }

    // Create a new customer
    const newCustomer = await Customer.create({
      name,
      email,
      phone,
    });

    return res.status(201).json(new ApiResponse(201, newCustomer, "New user created"));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Something went wrong"));
  }
};

