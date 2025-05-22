import Button from "./Button";
import "./Header.css";

const Header = ({
  leftBtnText,
  onClickLeftBtn,
  centerText,
  rightBtnText,
  onClickRightBtn,
}) => {
  return (
    <header className="Header">
      <div className="header_left">
        <Button text={leftBtnText} onClick={onClickLeftBtn}>
          {leftBtnText}
        </Button>
      </div>
      <div className="header_center">{centerText}</div>
      <div className="header_right">
        <Button text={rightBtnText} onClick={onClickRightBtn}>
          {rightBtnText}
        </Button>
      </div>
    </header>
  );
};

export default Header;
