import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  { emotionId: 1, emotionName: "배고픔" },
  { emotionId: 2, emotionName: "졸림" },
  { emotionId: 3, emotionName: "더움" },
  { emotionId: 4, emotionName: "쉬고싶음" },
  { emotionId: 5, emotionName: "놀고싶음" },
];

const Editor = () => {
  const emotionId = 1;

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list">
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotionId === emotion.emotionId ? true : false}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성하기"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
