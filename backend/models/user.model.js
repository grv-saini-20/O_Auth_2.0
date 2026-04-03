import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    provider: { 
    type: String, 
    enum: ['local', 'google'], // login type
    default: 'local'
  }
}, {timestamps: true});

export default mongoose.model("User", userSchema);