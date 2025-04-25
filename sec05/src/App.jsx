import BulbSwitch from "./components/BulbSwitch";
import Counter from "./components/Counter";

function App() {
  // const state = useState(0);
  // useState가 아닌 일반 변수로 선언 시, state가 변경되어도 렌더링이 되지 않음.

  return (
    <>
      <BulbSwitch />
      <Counter />
    </>
  );
}

export default App;
