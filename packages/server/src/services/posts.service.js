const db = require("../repositories/db");

class NonTitleError extends Error {
  status = 400;
  constructor(message) {
    super(message);
    this.name = "NonTitleError";
  }
}

class PostService {
  async createPost(post) {
    if (!post.title.trim()) {
      throw new NonTitleError("Title is required");
    }
    const newPost = {
      id: db.posts.length + 1,
      ...post,
    };
    db.posts.push(newPost);
    return newPost;
  }

  async getPosts() {
    return db.posts;
  }

  async getPostById(id) {
    return db.posts.find((post) => post.id === id);
  }

  async updatePost(id, post) {
    const index = db.posts.findIndex((post) => post.id === id);
    db.posts[index] = post;
  }

  async deletePost(id) {
    const index = db.posts.findIndex((post) => post.id === id);
    db.posts.splice(index, 1);
  }
}

module.exports = new PostService();
