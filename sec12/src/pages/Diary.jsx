import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return <div>{params.id}의 공개 일기장</div>;
};

export default Diary;
