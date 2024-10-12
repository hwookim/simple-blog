import request from "./request";

const postApi = (() => {
  const getAllPosts = () => request.get("/posts");

  const createPost = (post: { title: string; content: string }) =>
    request.post("/posts", post);

  const deletePost = (id: number) => request.delete(`/posts/${id}`);

  return {
    getAll: getAllPosts,
    create: createPost,
    delete: deletePost,
  };
})();

export default postApi;
