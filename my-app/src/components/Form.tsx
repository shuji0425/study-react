import React, { useState } from "react";
import TextInput from "./TextInput";

const Form = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() === "") {
      setError("入力は必須です！");
      return;
    }

    setError("");
    alert(`送信されたテキスト: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={text} onChange={(e) => setText(e.target.value)} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;