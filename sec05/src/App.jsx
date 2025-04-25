import { useState } from "react";
import "./App.css";

function App() {
  // const state = useState(0);
  // useState가 아닌 일반 변수로 선언 시, state가 변경되어도 렌더링이 되지 않음.
  const [count, setCount] = useState(0); // state: 0, setState: function to change state
  const [light, setLight] = useState("OFF"); // state: false, setState: function to change state

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          {light === "ON" ? "불 끄기" : "불 켜기"}
        </button>
      </div>
      <h1>
        {count}
        <button onClick={() => setCount(count + 1)}>증가</button>
      </h1>
    </>
  );
}

export default App;
