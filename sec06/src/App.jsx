import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

// 일반변수는 외부 선언 시 모든 컴포넌트가 공유한다. -> 조심
// const isMount = { state: false };

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  // 일반변수는 내부 선언 시 렌더링될 때마다 값이 초기화된다. -> 조심
  // const isMount = { state: false };

  // useRef는 컴포넌트마다 고유한 값을 가지며, 리렌더링되어도 값이 유지된다. -> 안전
  const isMount = useRef(false);

  const handleClick = (value) => {
    setCount(count + value);
  };

  // useEffect로 라이프사이클 제어하기
  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("애기 컴포넌트 짜잔");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("컴포넌트 업데이트");
  }); // deps 생략

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller action={handleClick} />
      </section>
    </div>
  );
}

export default App;
