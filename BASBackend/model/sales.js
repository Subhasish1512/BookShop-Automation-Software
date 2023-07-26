const mongoose = require("mongoose")

const Sales = new mongoose.Schema({
    salesID: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    content: {
        type: Object,
        required: true,
    },
    totalBill: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Sales', Sales);