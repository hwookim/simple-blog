const express = require("express");
const postController = require("../controllers/posts.controller");

const postRouter = express.Router();

const wrapAsync = (fn) => {
  return (req, res, next) => {
    if (typeof fn === "function") {
      fn(req, res, next).catch(next);
    }
  };
};

postRouter.post("/", wrapAsync(postController.createPost));
postRouter.get("/", postController.getPosts);
postRouter.delete("/:id", postController.deletePost);

module.exports = postRouter;
