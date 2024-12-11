const post = require("../models/Post");

class PostsController {
    static async getAllPosts(req, res) {
        try {
            const posts = await post.findAll();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ error: "Error fetching posts" });
        }
    }
}

module.exports = PostsController;
