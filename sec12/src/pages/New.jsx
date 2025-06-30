import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChildren={<Button text={"< 뒤로 가기"} />}
      ></Header>
      <Editor></Editor>
    </div>
  );
};

export default New;
