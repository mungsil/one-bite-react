import "./App.css";
// import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header"; // ESM 써도 파일 확장자 생략 가능(Vite 덕분임)
import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
