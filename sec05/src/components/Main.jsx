import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// ex) 삼항 연산자처럼 한 줄의 코드가 값을 반환하는 경우

// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// ex) true/false, null, undefined는 렌더링되지 않는다.

// 3. 모든 태그는 닫혀있어야한다.
// ex) <img> 도 닫혀있어야함.

// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const user = {
    money: 50000,
  };

  if (user.money >= 120000) {
    // 직접 스타일 적용 => 가독성 떨어짐
    return (
      <div
        style={{
          backgroundColor: "yellow",
          borderBottom: "1px solid black",
        }}
      >
        예매 가능합니다.
      </div>
    );
  }

  // class가 아닌 className을 사용해야 한다.
  return <div className="unavaliable"> 그치만 예매 불가합니다.</div>;

  // return (
  //   <>
  //     {user.money >= 120000 ? (
  //       <div>예매 가능합니다.</div>
  //     ) : (
  //       <div>예매 불가합니다.</div>
  //     )}
  //   </>
  // );
};

export default Main;
