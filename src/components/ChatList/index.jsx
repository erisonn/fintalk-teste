import { chatMock } from "../../mock";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import ChatListItem from "./ChatListItem";
import CreateChatButton from "./CreateChatButton";
import { getLoggedUser } from "../../helpers/getLoggedUser";
import { useState } from "react";
import Button from "../Button";

const ChatList = () => {
  const user = getLoggedUser();
  const mergedChats = [...user.chats, ...chatMock];
  const { id: idFromUrl } = useParams();
  const navigate = useNavigate();

  const [chatsData, setChatsData] = useState(mergedChats);

  const handleClick = (id) => {
    navigate(`/messages/${id}`);
  };

  const handleSetChatsData = (newChatData, isDelete) => {
    if (isDelete) {
      return setChatsData([...newChatData, ...chatMock]);
    }
    setChatsData([newChatData, ...mergedChats]);
  };

  console.log(chatsData);

  const handleLogOut = () => {
    window.localStorage.removeItem("finChatLoggedUser");
    navigate("/login");
  };

  return (
    <div className="ChatList">
      <div className="ChatList-header">
        <h2>Your chats: {user.user}</h2>
        <Button
          buttonText={"Log out"}
          onClick={handleLogOut}
          buttonHeight={25}
          buttonWidth={100}
          backgroundColor={"#ff4545"}
        />
        <CreateChatButton setChatData={handleSetChatsData} />
      </div>
      <div className="ChatList-items-container">
        {chatsData.map((chat) => {
          const lastMessage = chat?.messages?.[chat.messages?.length - 1];
          const isSelected = String(idFromUrl) === String(chat.id);
          return (
            <ChatListItem
              isCreatedByUser={chat.isCreatedByUser}
              key={chat.id}
              isSelected={isSelected}
              handleClick={handleClick}
              handleSetChatsData={handleSetChatsData}
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
