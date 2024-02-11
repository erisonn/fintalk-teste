import "./index.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Navigate } from "react-router-dom";
import { createLocalStorageMessage } from "../../helpers/createLocalStorageMessage";
import { useRef, useState } from "react";
import Button from "../Button";
import CreateEditChatPopOver from "../CreateEditChatPopOver";
import { editLocalStorageChat } from "../../helpers/editLocalStorageChat";

dayjs.extend(relativeTime);
const ChatContent = ({ id, chatsData, listRef }) => {
  const [shouldRenderPopover, setShouldRenderPopover] = useState(false);
  const currentChat = chatsData.find((chat) => String(chat.id) === String(id));
  const messageRef = useRef(null);

  const handleEditChat = (e) => {
    e.preventDefault();
    editLocalStorageChat(currentChat.id, e.target[0].value, e.target[1].value);
    setShouldRenderPopover(false);
  };

  const handleSendMessage = (e, chatId) => {
    e.preventDefault();
    createLocalStorageMessage(e.target[0].value, chatId);
    messageRef.current.value = "";
  };

  if (!id) {
    return (
      <div className="ChatContent">
        <div className="ChatContent-empty">
          <h1>No chat selected</h1>
        </div>
      </div>
    );
  }

  if (!currentChat) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="ChatContent">
      <div className="ChatContent-header-wrapper">
        <div>
          <h1>{currentChat.title}</h1>
          {currentChat.description && <h4>{currentChat.description}</h4>}
        </div>
        {shouldRenderPopover && (
          <CreateEditChatPopOver
            currentChat={currentChat}
            isEdit
            onSubmit={handleEditChat}
          />
        )}
        {currentChat.isCreatedByUser && (
          <Button
            buttonText={"Edit"}
            buttonWidth={80}
            buttonHeight={30}
            onClick={() =>
              setShouldRenderPopover(
                (shouldRenderPopover) => !shouldRenderPopover
              )
            }
          />
        )}
      </div>
      <div className="ChatContent-messages-wrapper">
        <div className="ChatContent-messages" ref={listRef}>
          {currentChat?.messages?.map((message) => (
            <p key={message?.id}>
              {dayjs.unix(message?.date).format("hh:mm")} <b>{message?.user}</b>
              : {message?.message}
            </p>
          ))}
        </div>
        <form
          className="NewMessage-form"
          onSubmit={(e) => handleSendMessage(e, currentChat.id)}
        >
          <input
            ref={messageRef}
            type="text"
            name="new message"
            placeholder="Message..."
          />
        </form>
      </div>
    </div>
  );
};

export default ChatContent;
