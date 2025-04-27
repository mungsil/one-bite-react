import { useState } from "react";

export function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return [input, onChange];
}
