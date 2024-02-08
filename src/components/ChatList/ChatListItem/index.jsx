import ChatLogo from "../../../assets/chat-icon.svg?react";
import "./index.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import classNames from "classnames";

dayjs.extend(relativeTime);
const ChatListItem = ({
  handleClick,
  chatData = {},
  lastMessage,
  isSelected,
}) => {
  return (
    <div
      className={classNames("ChatList-item", { selected: isSelected })}
      onClick={() => handleClick(chatData.id)}
    >
      <div className="ChatList-item-logo">
        <ChatLogo />
      </div>
      <div className="ChatList-item-content">
        <h4>{chatData.title}</h4>
        {lastMessage ? (
          <p>
            {dayjs.unix(lastMessage?.date).format("hh:mm")}{" "}
            <b>{lastMessage?.user}</b>: {lastMessage?.message}
          </p>
        ) : (
          <p>No messages yet</p>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
