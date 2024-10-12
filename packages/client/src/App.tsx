import { useEffect, useState } from "react";
import PostInput from "./components/PostInput";
import api from "./api";
import { Post } from "./type/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.post.getAll().then(setPosts);
  }, []);

  const handleSubmit = async (post: Post) => {
    const id = await api.post.create(post);
    if (!id) return;

    setPosts([...posts, { ...post, id }]);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    const res = await api.post.delete(id);
    if (!res.ok) return;

    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <PostInput onSubmit={handleSubmit} />
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            borderBottom: "1px solid black",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ fontWeight: 800 }}>{post.title}</div>
            <button
              style={{ marginLeft: "auto" }}
              onClick={() => handleDelete(post.id)}
            >
              x
            </button>
          </div>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
