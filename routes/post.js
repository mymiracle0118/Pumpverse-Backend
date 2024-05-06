const express = require('express');
const router = express.Router();
const { getPost, addPost, updatePost, deletePost } = require("../controllers/post.controller");

router.get('/', getPost);

router.post('/', addPost);

router.put('/:id', updatePost)

router.delete('/:id', deletePost);

module.exports = router;