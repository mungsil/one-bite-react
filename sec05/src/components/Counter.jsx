import { useState } from "react";

const Counter = () => {
  console.log("Counter 렌더링");

  const [count, setCount] = useState(0); // state: 0, setState: function to change state

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default Counter;
