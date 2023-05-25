import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    fellName: {
        type: String,
        required: true,
    },
    email: {
        trype: String,
        required: true,
    },
});

const Author = mongoose.model('Author', authorSchema);

export default Author;