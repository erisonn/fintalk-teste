import { useState } from "react";
import "./index.scss";
import Button from "../../Button";
import { createLocalStorageChat } from "../../../helpers/createLocalStorageChat";

const CreateChatButton = ({ setChatData }) => {
  const [shouldRenderPopOver, setShouldRenderPopOver] = useState(false);

  const togglePopOver = () => {
    setShouldRenderPopOver((shouldRenderPopOver) => !shouldRenderPopOver);
  };

  const handleCreateChat = (event) => {
    event.preventDefault();
    createLocalStorageChat(
      event.target[0].value,
      event.target[1].value,
      setChatData
    );
    setShouldRenderPopOver(false);
  };

  return (
    <div className="CreateChatButton-wrapper">
      {shouldRenderPopOver && (
        <div className="CreateChatButton-popOver">
          <form onSubmit={handleCreateChat}>
            <h4>Chat name</h4>
            <input type="text" name="Chat name" required />
            <h4>Chat description</h4>
            <input type="text" name="Chat description" required />
            <Button buttonText={"Create"} buttonHeight={35} buttonWidth={100} />
          </form>
        </div>
      )}
      <Button
        onClick={togglePopOver}
        buttonText={"Create chat"}
        buttonWidth={120}
        buttonHeight={35}
      />
    </div>
  );
};

export default CreateChatButton;
