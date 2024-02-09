import dayjs from "dayjs";
import { getAllUsers, getLoggedUser } from "./getLoggedUser";

export const createLocalStorageMessage = (message, chatId) => {
  const allUsers = getAllUsers();
  const loggedUser = getLoggedUser();
  const loggedUserWithChatData = allUsers.find(
    (user) => user.id === loggedUser.id
  );

  const currentChatData = loggedUserWithChatData.chats.find(
    (chat) => chat.id === chatId
  );

  const newChatData = {
    ...currentChatData,
    messages: [
      ...currentChatData.messages,
      {
        message,
        user: loggedUser.user,
        date: dayjs().unix(),
        id: crypto.randomUUID(),
      },
    ],
  };

  Object.assign(currentChatData, newChatData);
  window.localStorage.setItem("finChatAccounts", JSON.stringify(allUsers));
  window.localStorage.setItem(
    "finChatLoggedUser",
    JSON.stringify(loggedUserWithChatData)
  );
  window.dispatchEvent(new Event("storage"));
};
