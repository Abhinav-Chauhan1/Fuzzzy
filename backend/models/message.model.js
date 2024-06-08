import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,   // ID of the sender
        ref: "User",  // Reference to the User model
        required: true  // Required field
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,   // ID of the receiver
        ref: "User",  // Reference to the User model
        required: true  // Required field
    },
    message: {
        type: String,   // Message content
        required: true  // Required field
    },
},
    { timestamps: true }  // Adds timestamps to the schema, createdAt and updatedAt
);

const Message = mongoose.model("Message", messageSchema);  // Creates a model from the schema

export default Message;  // Exports the model