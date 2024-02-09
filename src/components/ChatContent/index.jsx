import "./index.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Navigate } from "react-router-dom";
import { createLocalStorageMessage } from "../../helpers/createLocalStorageMessage";
import { useRef } from "react";

dayjs.extend(relativeTime);
const ChatContent = ({ id, chatsData, listRef }) => {
  const currentChat = chatsData.find(
    (chat) => String(chat.id) === String(id)
  );
  const messageRef = useRef(null);

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
      <h1>{currentChat.title}</h1>
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
