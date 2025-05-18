import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // BrowserRouter: 브라우저의 현재 주소를 저장하고 감지하는 역할로, 부모 컴포넌트로 사용하여 자식 컴포넌트들이 해당 기능을 이용할 수 있도록 한다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
