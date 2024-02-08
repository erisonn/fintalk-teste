import "./index.scss";

const Button = ({
  buttonText,
  onClick = () => {},
  buttonHeight,
  buttonWidth,
  backgroundColor
}) => {
  return (
    <button
      style={{ width: buttonWidth, height: buttonHeight, backgroundColor: backgroundColor }}
      className="ButtonComponent"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
