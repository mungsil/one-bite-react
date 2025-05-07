import "./List.css";
import Item from "../item/Item";

const List = () => {
  return (
    <div className="List">
      <h3>Added List 👌</h3>
      <input placeholder="검색어 입력" />
      <div className="added_items_wrapper">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default List;
