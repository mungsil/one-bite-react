import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/NotFound";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import { getEmotionImage } from "./util/get-emotion-image";

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    // useNavigate 훅을 사용하여 페이지 이동, 이벤트 핸들러에서 사용
    nav("/new");
  };

  return (
    <>
      {/* 이미지를 public 폴더에 넣고, import가 아닌 경로로 이미지를 불러올 수도 있다.
        해당 방법은 vite가 자동으로 제공하는 이미지 최적화가 동작하지 않는다. 
        - 최적화 -> 브라우저에 이미지 캐싱
        - 소수의 이미지 -> import
        - 많은 이미지 -> public 폴더에 넣고 경로로 불러오기 추천~
        */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      {/* html a 태그 -> CSR 불가, Link 컴포넌트를 쓰자 */}
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/notfound"}>NotFound</Link>
      </div>
      <button onClick={onClickBtn}>New 페이지로 이동</button>
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
