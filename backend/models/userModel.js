const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema({
    aadhar: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
});

// Create Model
const User = mongoose.model('User', userSchema)
module.exports =  User;