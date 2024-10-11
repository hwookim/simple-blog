import { useState } from "react";
import PostInput from "./components/PostInput";

function App() {
  const [posts, setPosts] = useState<string[]>([]);

  const handleSubmit = (post: string) => {
    setPosts([...posts, post]);
  };

  const handleDelete = (idx: number) => {
    setPosts(posts.filter((_, index) => index !== idx));
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
      {posts.map((post, idx) => (
        <div key={idx}>
          {post}
          <button onClick={() => handleDelete(idx)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default App;
