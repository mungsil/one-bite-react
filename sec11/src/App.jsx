import "./App.css";
import { use, useRef } from "react";
import { useReducer } from "react";
import { useCallback } from "react";

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
      return items.map((item) =>
        item.id === action.id
          ? {
              ...item,
              isClear: !item.isClear,
            }
          : item
      );
    }

    case "DELETE":
      return items.filter((item) => item.id != action.id);
  }
}

function App() {
  const [items, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const handleAddItem = useCallback((newContent) => {
    dispatch({
      type: "ADD",
      data: {
        id: idRef.current,
        content: newContent,
        date: new Date().getTime(),
        isClear: false,
      },
    });
    idRef.current += 1;
  }, []);

  const handleCheckItem = useCallback((id) => {
    dispatch({
      type: "CHECK",
      id: id,
    });
  }, []);

  const handleDeleteItem = useCallback((id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  }, []);

  /*   // 마운트 시점에만 실행되는 함수 -> dependencies가 비어있으므로
  const func = useCallback(() => {}, []); */

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
