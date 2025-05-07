import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Editor from "./components/editor/Editor";

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
