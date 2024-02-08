import { useState } from "react";
import "./index.scss";
import Button from "../../Button";
import { createLocalStorageChat } from "../../../helpers/createLocalStorageChat";
import { useNavigate } from "react-router-dom";

const CreateChatButton = ({ setChatData }) => {
  const navigate = useNavigate();
  const [shouldRenderPopOver, setShouldRenderPopOver] = useState(false);

  const togglePopOver = () => {
    setShouldRenderPopOver((shouldRenderPopOver) => !shouldRenderPopOver);
  };

  const handleCreateChat = (event) => {
    event.preventDefault();
    createLocalStorageChat(event.target[0].value, setChatData);
    setShouldRenderPopOver(false);
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("finChatLoggedUser");
    navigate("/login");
  };

  return (
    <div className="CreateChatButton-wrapper">
      {shouldRenderPopOver && (
        <div className="CreateChatButton-popOver">
          <h4>Chat name</h4>
          <form onSubmit={handleCreateChat}>
            <input type="text" name="Chat name" required />
            <Button buttonText={"Create"} buttonHeight={35} buttonWidth={100} />
          </form>
        </div>
      )}
      <Button
        onClick={togglePopOver}
        buttonText={"Create chat"}
        buttonWidth={200}
        buttonHeight={35}
      />
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default CreateChatButton;
