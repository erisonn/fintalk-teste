import { useParams } from "react-router-dom";
import ChatContent from "../../components/ChatContent";
import ChatList from "../../components/ChatList";
import "./index.scss";
import { useEffect, useState } from "react";
import { getLoggedUser } from "../../helpers/getLoggedUser";

const Messages = () => {
  const { id } = useParams();
  const user = getLoggedUser();
  const chats = user.chats;
  const [chatsData, setChatsData] = useState(chats);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setChatsData(getLoggedUser().chats);
    });

    // return () => {
    //   window.removeEventListener("chatUpdate");
    // };
  }, [chats]);

  return (
    <div className="Messages-page">
      <ChatList user={user} chatsData={chatsData} setChatsData={setChatsData} />
      <ChatContent id={id} chatsData={chatsData}/>
    </div>
  );
};

export default Messages;
