const Button = ({ children, text, color = "blue" }) => {
  return (
    <button style={{ color: color }}>
      {text}
      {children}
    </button>
  );
};

export default Button;
