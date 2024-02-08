import "./index.scss";

const Button = ({ buttonText, onClick, buttonHeight, buttonWidth }) => {
  return (
    <button
      style={{ width: buttonWidth, height: buttonHeight }}
      className="ButtonComponent"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
