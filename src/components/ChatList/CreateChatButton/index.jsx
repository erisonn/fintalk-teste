import "./index.scss";

const CreateChatButton = () => {
  const handleCreateChat = () => {
    console.log("Create chat");
  };

  return (
    <button onClick={handleCreateChat} className="CreateChatButton">
      Create chat
    </button>
  );
};

export default CreateChatButton;
