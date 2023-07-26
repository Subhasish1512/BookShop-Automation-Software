const mongoose = require("mongoose");

const Books = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    threshold: {
        type: Number,
        default: 0,
    },
    currentusage: {
        type: Number,
        default: 0,
    },
    shelf: {
        type: String, 
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publisherAddress: {
        type: String,
        // required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Books', Books);