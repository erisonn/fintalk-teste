import { useParams } from "react-router-dom";
import ChatContent from "../../components/ChatContent";
import ChatList from "../../components/ChatList";
import "./index.scss";

const Messages = () => {
  const { id } = useParams();

  return (
    <div className="Messages-page">
      <ChatList />
      <ChatContent id={id} />
    </div>
  );
};

export default Messages;
