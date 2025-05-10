import "./List.css";
import Item from "../item/Item";
import { useState } from "react";

const List = ({ items }) => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const setInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(input);
      setInput("");
    }
  };

  const getSearchedResult = () => {
    if (searchTerm === "") {
      return items;
    }

    return items.filter((item) => item.content.includes(searchTerm));
  };

  const searchedItems = getSearchedResult();

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
