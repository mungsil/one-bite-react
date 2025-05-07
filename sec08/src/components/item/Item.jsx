import "./Item.css";

const Item = () => {
  return (
    <div className="Item">
      <input type="checkbox" />
      <div className="content">add</div>
      <div className="date">Date</div>
      <button>삭제</button>
    </div>
  );
};

export default Item;
