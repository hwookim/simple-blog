import { useRef } from "react";
import { Post } from "../type/Post";

interface PostInputProps {
  onSubmit: (post: Post) => void;
}

export default function PostInput(props: PostInputProps) {
  const { onSubmit } = props;
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    if (!title || !content) return;

    onSubmit({ title, content });
    titleRef.current!.value = "";
    contentRef.current!.value = "";
  };

  return (
    <div
      style={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <input style={{ width: "100%" }} ref={titleRef} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <textarea ref={contentRef} />
    </div>
  );
}
