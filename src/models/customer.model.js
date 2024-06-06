
import {mongoose, Schema }from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    totalSpends:{
        type: Number,
    },
    visits:{
        type: Number,
        
    },
    lastVisitedAt:{
        type: Date,
    },
});

export const Customer = mongoose.model("Customer", customerSchema);