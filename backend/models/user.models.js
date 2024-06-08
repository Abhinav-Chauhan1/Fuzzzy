import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 12,
    },
    confirmPassword: {
        type: String,
        required: true,
        min: 6,
        max: 12,
    },
},{ timestamps: true }  // Adds timestamps to the schema, createdAt and updatedAt   
);

const User = mongoose.model("User", userSchema);

export default User;