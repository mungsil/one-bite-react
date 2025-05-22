import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/NotFound";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    // useNavigate 훅을 사용하여 페이지 이동, 이벤트 핸들러에서 사용
    nav("/new");
  };

  return (
    <>
      <Header
        leftBtnText={"뒤로가기"}
        onClickLeftBtn={() => {
          console.log("뒤로가기 클릭");
        }}
        centerText={"일기장"}
        rightBtnText={"새 일기"}
        onClickRightBtn={() => {
          console.log("새 일기 클릭");
        }}
      ></Header>
      <Button
        text={"버튼1"}
        onClick={() => {
          console.log("버튼1 클릭");
        }}
        type={"DEFAULT"}
      ></Button>
      <Button
        text={"버튼2"}
        onClick={() => {
          console.log("버튼2 클릭");
        }}
        type={"POSITIVE"}
      ></Button>
      <Button
        text={"버튼3"}
        onClick={() => {
          console.log("버튼3 클릭");
        }}
        type={"NEGATIVE"}
      ></Button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
