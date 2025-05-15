import "./App.css";
import { useRef } from "react";
import { useReducer } from "react";

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

function reducer(items, action) {
  switch (action.type) {
    case "ADD":
      return [action.data, ...items];

    case "CHECK": {
      return items.map((item) => {
        item.id === action.id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item;
      });
    }

    case "DELETE":
      return items.filter((item) => item.id != action.id);
  }
}

function App() {
  const [items, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const handleAddItem = (newContent) => {
    dispatch({
      type: "ADD",
      data: {
        id: idRef.current,
        content: newContent,
        date: new Date().getTime(),
        isCompleted: false,
      },
    });
    idRef.current += 1;
  };

  const handleCheckItem = (id) => {
    dispatch({
      type: "CHECK",
      id: id,
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onSubmit={handleAddItem} />
      <List
        items={items}
        onCheckItem={handleCheckItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
