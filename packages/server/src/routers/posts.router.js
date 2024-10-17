const express = require("express");
const postController = require("../controllers/posts.controller");

const postRouter = express.Router();

postRouter.post("/", postController.createPost);
postRouter.get("/", postController.getPosts);
postRouter.delete("/:id", postController.deletePost);

module.exports = postRouter;
