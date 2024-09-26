import { useState } from "react";

interface PostInputProps {
  onSubmit: (post: string) => void;
}

export default function PostInput(props: PostInputProps) {
  const { onSubmit } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
