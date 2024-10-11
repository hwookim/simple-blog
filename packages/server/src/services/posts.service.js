const db = require("../repositories/db");

class PostService {
  async createPost(post) {
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
