const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/postController");

router.get("/", PostsController.getAllPosts);

module.exports = router;

