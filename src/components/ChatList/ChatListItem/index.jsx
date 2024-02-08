import ChatLogo from "../../../assets/chat-icon.svg?react";
import "./index.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const ChatListItem = ({ handleClick, chatData = {}, lastMessage }) => {
  return (
    <div
      className="ChatList-item"
      key={chatData.id}
      onClick={() => handleClick(chatData.id)}
    >
      <div className="ChatList-item-logo">
        <ChatLogo />
      </div>
      <div className="ChatList-item-content">
        <h4>{chatData.title}</h4>
        <p>
          {dayjs.unix(lastMessage.date).format("hh:mm")}{" "}
          <b>{lastMessage.user}</b>: {lastMessage.message}
        </p>
      </div>
    </div>
  );
};

export default ChatListItem;
