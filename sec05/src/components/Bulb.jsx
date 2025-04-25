// state를 props로 전달받은 컴포넌트
const Bulb = ({ light }) => {
  console.log("Bulb 렌더링");
  // 컴포넌트가 리렌더링이 되는 경우
  // 1. 부모 컴포넌트가 리렌더링 될 때
  // 2. state가 변경될 때
  // 3. props가 변경될 때

  // 부모 컴포넌트의 state가 변경될 때마다 Bulb 컴포넌트도 리렌더링 된다.
  // => 성능 저하 유발
  // => 관련 없는 두 개의 state가 있을 때, 각각의 state를 관리하는 컴포넌트를 분리하는 것이 좋다.

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

export default Bulb;
