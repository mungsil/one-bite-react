import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller action={handleClick} />
      </section>
    </div>
  );
}

export default App;
