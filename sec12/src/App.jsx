import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/NotFound";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { use } from "react";

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    // useNavigate 훅을 사용하여 페이지 이동, 이벤트 핸들러에서 사용
    nav("/new");
  };

  return (
    <>
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
