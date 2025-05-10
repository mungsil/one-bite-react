import "./App.css";
import { useState, useRef } from "react";

import Header from "./components/header/Header";
import List from "./components/list/List";
import Editor from "./components/editor/Editor";

const mockData = [
  { id: 0, content: "동태찜", date: new Date().getTime(), isClear: false },
  {
    id: 1,
    content: "바닐라 라떼",
    date: new Date().getTime(),
    isClear: true,
  },
];

function App() {
  const [items, setItems] = useState(mockData);
  const idRef = useRef(2);

  const handleAddItem = (newContent) => {
    const newItem = {
      id: idRef.current++,
      content: newContent,
      date: new Date().toTimeString(),
      isCompleted: false,
    };
    setItems([newItem, ...items]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onSubmit={handleAddItem} />
      <List items={items} />
    </div>
  );
}

export default App;
