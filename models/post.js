const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    coin_id: {
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
}, {
    timestamps: true
});

module.exports = mongoose.model('posts', postSchema);