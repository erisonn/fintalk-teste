import Button from "../Button";
import './index.scss'

const CreateEditChatPopOver = ({ onSubmit, isEdit = false }) => {
  return (
    <div className="CreateEditChatButton-popOver">
      <form onSubmit={onSubmit}>
        <h4>Chat name</h4>
        <input type="text" name="Chat name" required />
        <h4>Chat description</h4>
        <input type="text" name="Chat description" required />
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
