import classNames from "classnames";
import Button from "../Button";
import "./index.scss";

const CreateEditChatPopOver = ({ onSubmit, isEdit = false, currentChat }) => {
  const chatName = isEdit ? currentChat.title : "";
  const chatDescription = isEdit ? currentChat.description : "";
  return (
    <div
      className={classNames("CreateEditChatButton-popOver", {
        "CreateEditChatButton-popOver-edit": isEdit,
      })}
    >
      <form onSubmit={onSubmit}>
        <h4>Chat name</h4>
        <input type="text" name="Chat name" required defaultValue={chatName} />
        <h4>Chat description</h4>
        <input
          type="text"
          name="Chat description"
          required
          defaultValue={chatDescription}
        />
        <Button
          buttonText={isEdit ? "Edit" : "Create"}
          buttonHeight={35}
          buttonWidth={100}
        />
      </form>
    </div>
  );
};

export default CreateEditChatPopOver;
