import "./Item.css";
import { memo } from "react";

const Item = ({ id, content, date, isClear, onCheck, onDelete }) => {
  return (
    <div className="Item">
      <input checked={isClear} type="checkbox" onChange={() => onCheck(id)} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
export default memo(Item);

/* 
export default memo(Item, (prevProps, nextProps) => {
  // True를 리턴하면 리렌더링 하지 않음
  // False를 리턴하면 리렌더링 함
  // id, content, date, isClear가 모두 같으면 리렌더링 하지 않음

  if (prevProps.isClear !== nextProps.isClear) {
    return false;
  }
  if (prevProps.content !== nextProps.content) {
    return false;
  }
  if (prevProps.date !== nextProps.date) {
    return false;
  }
  if (prevProps.id !== nextProps.id) {
    return false;
  }

  return true;

  /*   return (
    prevProps.id === nextProps.id &&
    prevProps.content === nextProps.content &&
    prevProps.date === nextProps.date &&
    prevProps.isClear === nextProps.isClear
  ); */
