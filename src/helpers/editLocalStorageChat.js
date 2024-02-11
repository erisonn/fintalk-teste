import { getAllUsers, getLoggedUser } from "./getLoggedUser";

export const editLocalStorageChat = (chatId, newTitle, newDescription) => {
  const allUsers = getAllUsers();

  const loggedUser = getLoggedUser();
  const loggedUserWithChatData = allUsers.find(
    (user) => user.id === loggedUser.id
  );
  const currentChat = loggedUserWithChatData.chats.find(
    (chat) => chat.id === chatId
  );

  const newChatData = {
    ...currentChat,
    title: newTitle,
    description: newDescription,
  };
  Object.assign(currentChat, newChatData);
  window.localStorage.setItem("finChatAccounts", JSON.stringify(allUsers));
  window.localStorage.setItem(
    "finChatLoggedUser",
    JSON.stringify(loggedUserWithChatData)
  );
  window.dispatchEvent(new Event("storage"));
};
