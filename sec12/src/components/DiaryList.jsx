import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"점심메뉴보기"} type={"POSITIVE"}></Button>
      </div>
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
