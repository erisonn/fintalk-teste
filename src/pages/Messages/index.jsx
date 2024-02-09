import { useParams } from "react-router-dom";
import ChatContent from "../../components/ChatContent";
import ChatList from "../../components/ChatList";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { getLoggedUser } from "../../helpers/getLoggedUser";

const Messages = () => {
  const { id } = useParams();
  const user = getLoggedUser();
  const chats = user.chats;
  const [chatsData, setChatsData] = useState(chats);
  const listRef = useRef(null)

  useEffect(() => {
    window.addEventListener("storage", () => {
      setChatsData(getLoggedUser().chats);
      listRef.current?.lastElementChild?.scrollIntoView()
    });

    // return () => {
    //   window.removeEventListener("chatUpdate");
    // };
  }, [chats]);

  return (
    <div className="Messages-page">
      <ChatList user={user} chatsData={chatsData} setChatsData={setChatsData} />
      <ChatContent id={id} chatsData={chatsData} listRef={listRef}/>
    </div>
  );
};

export default Messages;
