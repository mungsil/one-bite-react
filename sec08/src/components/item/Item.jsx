import "./Item.css";

const Item = ({ id, content, date, isCompleted, onCheck }) => {
  return (
    <div className="Item">
      <input
        checked={isCompleted}
        type="checkbox"
        onChange={() => onCheck(id)}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default Item;
