import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.date.getTime(), input.content, input.emotionId);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChildren={
          <Button text={"< 뒤로 가기"} onClick={() => navigate("/")} />
        }
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default New;
