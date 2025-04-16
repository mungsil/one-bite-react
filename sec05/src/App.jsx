import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

// props: 일반적인 값, html 요소, 컴포넌트까지 전달가능, (html 요소, 컴포넌트)는 children으로 전달됨

function App() {
  const rabbitButtonProps = {
    text: "토끼",
    color: "brown",
  };

  return (
    <>
      <Button {...rabbitButtonProps} />
      <Button text="정말" />
      <Button text="귀여워">
        <div> 용뭉실 </div>
        <Header />
      </Button>
    </>
  );
}

export default App;
