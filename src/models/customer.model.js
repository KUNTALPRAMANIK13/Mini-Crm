
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
        required: true,
    },
    visits:{
        type: Number,
        required: true,
    },
    lastVisitedAt:{
        type: Date,
        required: true,
    },
});