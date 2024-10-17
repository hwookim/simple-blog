const express = require("express");
const postRouter = require("./posts.router");

const rootRouter = express.Router();

rootRouter.use("/posts", postRouter);

module.exports = rootRouter;
