import './index.scss'

const ChatContent = ({ id }) => {
  if (!id) {
    return (
      <div className="ChatContent">
        <h1>No chat selected</h1>
      </div>
    );
  }

  return <p>Chat selected</p>;
};

export default ChatContent;
