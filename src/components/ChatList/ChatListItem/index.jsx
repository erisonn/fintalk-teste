import ChatLogo from "../../../assets/chat-icon.svg?react";
import "./index.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import classNames from "classnames";
import TrashIcon from "../../../assets/trash-icon.svg?react";
import { deleteLocalStorageChat } from "../../../helpers/deleteLocalStorageChat";
import { useNavigate } from "react-router-dom";

dayjs.extend(relativeTime);
const ChatListItem = ({
  handleClick,
  chatData = {},
  lastMessage,
  isSelected,
  isCreatedByUser,
  handleSetChatsData,
}) => {
  const navigate = useNavigate();
  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteLocalStorageChat(id, handleSetChatsData);
    navigate("/messages");
  };

  return (
    <div
      className={classNames("ChatList-item", { selected: isSelected })}
      onClick={() => handleClick(chatData.id)}
    >
      <div className="ChatList-item-logo">
        <ChatLogo />
        {isCreatedByUser && (
          <button
            className="ChatList-item-delete-button"
            onClick={(e) => handleDelete(e, chatData.id)}
          >
            <TrashIcon />
          </button>
        )}
      </div>
      <div className="ChatList-item-content">
        <h4>{chatData.title}</h4>
        {chatData?.description && <p>{chatData?.description}</p>}
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
