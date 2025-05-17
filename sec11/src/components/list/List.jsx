import "./List.css";
import Item from "../item/Item";
import { ItemStateContext } from "../../App";
import { useState, useMemo, useEffect, useContext } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const items = useContext(ItemStateContext);

  const setInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(input);
      setInput("");
    }
  };

  // useMemo는 사이드 이펙트를 가지지 않도록 설계
  const searchedItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter((item) =>
      item.content.includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  // 사이드 이펙트는 useEffect를 사용
  useEffect(() => {
    if (searchTerm && searchedItems.length === 0) {
      alert("검색 결과가 없습니다.");
      setSearchTerm("");
    }
  }, [searchedItems, searchTerm]);

  return (
    <div className="List">
      <h3>Added List 👌</h3>
      <input
        value={input}
        placeholder="검색어 입력"
        onChange={setInputValue}
        onKeyDown={handleSearch}
      />
      <div className="added_items_wrapper">
        {searchedItems.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default List;
