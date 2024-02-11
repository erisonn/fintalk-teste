import { useState } from "react";
import "./index.scss";
import Button from "../../Button";
import { createLocalStorageChat } from "../../../helpers/createLocalStorageChat";
import CreateEditChatPopOver from "../../CreateEditChatPopOver";

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
        <CreateEditChatPopOver onSubmit={handleCreateChat} />
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
