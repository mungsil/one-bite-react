import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ items }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const getSortedItems = () => {
    if (sortType === "oldest") {
      return items.toSorted((a, b) => a.date - b.date);
    }
    return items.toSorted((a, b) => b.date - a.date);
  };
  const sortedItems = getSortedItems(items, sortType);

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={handleSortChange} value={sortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => navigate("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        ></Button>
      </div>
      <div className="list_wrapper">
        {sortedItems.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
