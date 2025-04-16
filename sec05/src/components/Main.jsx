// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// ex) 삼항 연산자처럼 한 줄의 코드가 값을 반환하는 경우

// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// ex) true/false, null, undefined는 렌더링되지 않는다.

// 3. 모든 태그는 닫혀있어야한다.
// ex) <img> 도 닫혀있어야함.

// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const firstDay = 19;
  const lastDay = 20;
  const date = { year: 2025, month: 7 };

  return (
    <main>
      <h1>
        {date.year}년 {date.month}월 {firstDay}-{lastDay}일에요!
      </h1>
    </main>
  );
};

export default Main;
