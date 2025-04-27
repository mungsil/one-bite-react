const Button = ({ input, onClick }) => {
  return (
    <button value={input} onClick={() => onClick(Number(input))}>
      {input}
    </button>
  );
};

export default Button;
