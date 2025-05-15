import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputValue === "") {
      inputRef.current.focus();
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="Editor">
      <input
        placeholder="사리"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default Editor;
