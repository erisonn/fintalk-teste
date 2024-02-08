import { useState } from "react";
import "./index.scss";
import Button from "../../Button";

const CreateChatButton = () => {
  const [shouldRenderPopOver, setShouldRenderPopOver] = useState(false);

  const handleCreateChat = () => {
    setShouldRenderPopOver((shouldRenderPopOver) => !shouldRenderPopOver);
  };

  return (
    <div className="CreateChatButton-wrapper">
      {shouldRenderPopOver && (
        <div className="CreateChatButton-popOver">
          <h4>Chat name</h4>
          <input type="text" name="Chat name" required />
        </div>
      )}
      <Button
        onClick={handleCreateChat}
        buttonText={"Create chat"}
        buttonWidth={200}
        buttonHeight={35}
      />
    </div>
  );
};

export default CreateChatButton;
