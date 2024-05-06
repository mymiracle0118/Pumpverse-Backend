const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
    },
    symbol: {
        type: String,
        maxlength: 10,
        required: true,
        trim: true
    },
    description: {
        type: String,
        maxlength: 1000,
    },
    social_website: {
        type: String,
        maxlength: 1000,
    },
    social_twitter: {
        type: String,
        maxlength: 1000,
    },
    social_telegram: {
        type: String,
        maxlength: 1000,
    },
    image: {
        type: String,
        required: true,
    },
    market_cap: {
        type: Number,
        required: true,
        default: 0,
    },
    decimals: {
        type: Number,
        required: true,
        default: 9,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('coins', coinSchema);