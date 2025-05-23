import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Notfound from "./pages/NotFound";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";
import { useReducer } from "react";

import { getEmotionImage } from "./util/get-emotion-image";

function reducer(state, action) {
  return state;
}

const mockData = [
  {
    id: 1,
    date: new Date().getTime(),
    content: "치이카와 귀여워",
    emotionId: 1,
  },
  {
    id: 2,
    date: new Date().getTime(),
    content: "인형뽑기 이제 안해",
    emotionId: 2,
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, [mockData]);

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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
