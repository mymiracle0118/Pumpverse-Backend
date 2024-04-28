const Post = require("../models/post")

/* GET request handler */
const getPost = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
}

/* POST Request handler */
const addPost = async (req, res) => {
    const highlights = req.body.highlights.split(",")
    const size = req.body.size.split(",")

    /* The request.body must have all these values */
    const post = {
        coin: req.body.coin,
        user: req.body.user,
        content: req.body.content,
        image: req.body.image,
        timestamp: Date.now(),
    }

    if (post){
        await Post.create(post)
        res.status(201).json({message: "Posts Add Success"})
        res.redirect("/")
    } 
    else {
        res.status(400).json({message: "Unable to add post"})
    }
}

/* PUT Request handler */
const updatePost = (req, res) => {
    res.json({message: "update Post"})
}

/* DELETE Request handler */
const deletePost = (req, res) => {
    res.json({message: "delete Post"})
}

module.exports = {
    getPost,
    addPost,
    updatePost,
    deletePost
}