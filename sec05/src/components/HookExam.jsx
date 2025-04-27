import { useInput } from "./../hooks/useInput";
// hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능하다.
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(custom hook)을 만들 수 있다. => use로 시작하는 함수

const HookExam = () => {
  const [input1, onChange1] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChange1}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
