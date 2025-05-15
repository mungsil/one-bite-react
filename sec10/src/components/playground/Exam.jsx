import { useReducer } from "react";

// reducer: 변환기
// =>  상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  // return 해주는 값을 reducer가 새로운 state값으로 적용

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는(발송하는) 함수
  const [state, dispatch] = useReducer(reducer, 0);
  // 내부에서 dispatch 호출 -> useReducer가 상태 변화를 실제로 처리하게 될 함수 호출

  const onClickPlus = () => {
    // 인자로 상태가 어떻게 변화되길 원하는 지 전달한다.(기본적으로 객체 형태)
    // => 이렇게 전달되는 객체를 액션 객체라고 부른다.
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    // 인자로 상태가 어떻게 변화되길 원하는 지 전달한다.(기본적으로 객체 형태)
    // => 이렇게 전달되는 객체를 액션 객체라고 부른다.
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
