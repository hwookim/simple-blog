const postService = require("../services/posts.service");

class PostController {
  async createPost(req, res) {
    const { title, content } = req.body;
    const post = await postService.createPost({ title, content });
    res.status(201).json(post.id);
  }

  async getPosts(req, res) {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    await postService.deletePost(id);
    res.status(204).end();
  }
}

module.exports = new PostController();
