import { chatMock } from "../ChatList/mock";
import "./index.scss";
import ChatLogo from "../../assets/chat-icon.svg?react";

const ChatList = () => {
  return (
    <div className="ChatList">
      <div className="ChatList-header">
        <h2>Your chats</h2>
        <button>Create chat</button>
      </div>
      <div className="ChatList-items-container">
        {chatMock.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];
          return (
            <div className="ChatList-item" key={chat.id}>
              <div className="ChatList-item-logo">
                <ChatLogo />
              </div>
              <div className="ChatList-item-content">
                <h4>{chat.title}</h4>
                <p>{lastMessage.user}: {lastMessage.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
