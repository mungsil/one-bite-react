import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";

const emotionList = [
  { emotionId: 1, emotionName: "배고픔" },
  { emotionId: 2, emotionName: "졸림" },
  { emotionId: 3, emotionName: "더움" },
  { emotionId: 4, emotionName: "쉬고싶음" },
  { emotionId: 5, emotionName: "놀고싶음" },
];

const getStringedDate = (targetDate) => {
  // yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    date: new Date(),
    emotionId: 1,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "date") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="date"
          type="date"
          value={getStringedDate(input.date)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list">
          {emotionList.map((emotion) => (
            <EmotionItem
              name="emotion_item"
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: emotion.emotionId,
                  },
                })
              }
              key={emotion.emotionId}
              {...emotion}
              isSelected={input.emotionId === emotion.emotionId ? true : false}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button
          text={"작성하기"}
          type={"POSITIVE"}
          onClick={onSubmitButtonClick}
        />
      </section>
    </div>
  );
};

export default Editor;
