import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🤷‍♂️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// memo: props가 바뀌지 않으면 리렌더링을 하지 않음
// memo는 이전의 props와 다음 props를 비교하여 리렌더링을 결정하는데, 이때 얕은 비교를 한다.
// 따라서, props가 객체일 경우에는 얕은 비교로는 다르다고 판단할 수 있다.
const memoizeHeader = memo(Header);

export default memoizeHeader;
