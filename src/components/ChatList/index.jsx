import { chatMock } from "../../mock";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import ChatListItem from "./ChatListItem";
import CreateChatButton from "./CreateChatButton";

const ChatList = () => {
  const { id: idFromUrl } = useParams();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/messages/${id}`);
  };

  return (
    <div className="ChatList">
      <div className="ChatList-header">
        <h2>Your chats</h2>
        <CreateChatButton/>
      </div>
      <div className="ChatList-items-container">
        {chatMock.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];
          const isSelected = String(idFromUrl) === String(chat.id);
          return (
            <ChatListItem
              key={chat.id}
              isSelected={isSelected}
              handleClick={handleClick}
              chatData={chat}
              lastMessage={lastMessage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
