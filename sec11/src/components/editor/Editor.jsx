import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { ItemDispatchContext } from "../../App";

const Editor = () => {
  const { handleAddItem } = useContext(ItemDispatchContext);

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
    handleAddItem(inputValue);
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
