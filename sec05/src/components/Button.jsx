const Button = ({ children, text, color = "blue" }) => {
  // 이벤트 객체
  function handleClick(e) {
    // SyntheticBaseEvent : React에서 제공하는 이벤트 객체
    // SyntheticBaseEvent는 브라우저에 따라 다르게 동작하는 이벤트를 통일된 인터페이스로 제공한다.
    // Synthetic=합성
    console.log("버튼 클릭", e);
    // alert("버튼 클릭");
  }

  return (
    <button
      onClick={handleClick}
      // onMouseEnter={handleMouseEnter}
      style={{ color: color }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
