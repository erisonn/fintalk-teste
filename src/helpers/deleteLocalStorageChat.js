import { getAllUsers, getLoggedUser } from "./getLoggedUser";

export const deleteLocalStorageChat = (id, handleSetChatsData) => {
  const allUsers = getAllUsers();

  const loggedUser = getLoggedUser();
  const loggedUserWithChatData = allUsers.find(
    (user) => user.id === loggedUser.id
  );

  const newChatData = loggedUserWithChatData.chats.filter(
    (chat) => chat.id !== id
  );

  const newUserData = {
    ...loggedUser,
    chats: newChatData,
  };

  Object.assign(loggedUserWithChatData, {
    ...loggedUserWithChatData,
    chats: newUserData.chats,
  });

  window.localStorage.setItem("finChatAccounts", JSON.stringify(allUsers));
  window.localStorage.setItem("finChatLoggedUser", JSON.stringify(newUserData));
  handleSetChatsData(newChatData, true);
};
