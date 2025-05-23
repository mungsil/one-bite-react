import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit</h1>
      <p>{id}의 일기 수정 페이지입니다.</p>
    </div>
  );
};
export default Edit;
