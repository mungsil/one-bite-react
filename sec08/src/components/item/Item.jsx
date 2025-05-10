import "./Item.css";

const Item = ({ id, content, date, isClear }) => {
  return (
    <div className="Item">
      <input checked={isClear} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default Item;
