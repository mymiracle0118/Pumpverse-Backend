const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    signature: {
        type: String,
        required: true,
    },
    mint: {
        type: String,
        required: true,
    },
    sol_amount: {
        type: Number,
        required: true,
    },
    is_buy: {
        type: Boolean,
        required: true,
        default: false,
    },
    user: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('trades', tradeSchema);