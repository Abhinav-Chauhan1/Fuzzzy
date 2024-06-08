import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,   // ID of the participants
        ref: "User",  // Reference to the User model
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,   // ID of the messages
        ref: "Message",  // Reference to the Message model
        default: [],
    }]
},
    { timestamps: true }  // Adds timestamps to the schema, createdAt and updatedAt
);

const Conversation = mongoose.model("Conversation", conversationSchema);  // Creates a model from the schema

export default Conversation;  // Exports the model