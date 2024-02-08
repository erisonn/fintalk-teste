import "./index.scss";
import { chatMock } from "../../mock";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Navigate } from "react-router-dom";

dayjs.extend(relativeTime);
const ChatContent = ({ id }) => {
  const currentChat = chatMock.find((chat) => String(chat.id) === String(id));

  if (!id) {
    return (
      <div className="ChatContent">
        <h1>No chat selected</h1>
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
        <div className="ChatContent-messages">
          {currentChat.messages.map((message) => (
            <p key={message?.date}>
              {dayjs.unix(message?.date).format("hh:mm")} <b>{message?.user}</b>:{" "}
              {message?.message}
            </p>
          ))}
        </div>
        <form className="NewMessage-form">
          <input type="text" name="new message" placeholder="Aa" />
        </form>
      </div>
    </div>
  );
};

export default ChatContent;
