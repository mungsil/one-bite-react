import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 5;
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="createdDate">
          {new Date().toLocaleDateString("ko-KR")}{" "}
        </div>
        <div className="content">솔티 카라멜 라떼</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"}></Button>
      </div>
    </div>
  );
};

export default DiaryItem;
