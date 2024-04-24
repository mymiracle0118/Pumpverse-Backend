const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    coin: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "Coin"
    },
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    timestamp: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('posts', postSchema);