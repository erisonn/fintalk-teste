import { getAllUsers, getLoggedUser } from "./getLoggedUser";

export const createLocalStorageChat = (
  chatName,
  chatDescription,
  setChatData
) => {
  const allUsers = getAllUsers();

  const loggedUser = getLoggedUser();
  const loggedUserWithChatData = allUsers.find(
    (user) => user.id === loggedUser.id
  );

  const newChatData = {
    id: crypto.randomUUID(),
    title: chatName,
    description: chatDescription,
    messages: [],
    isCreatedByUser: true,
  };

  Object.assign(loggedUserWithChatData, {
    ...loggedUserWithChatData,
    chats: [newChatData, ...loggedUserWithChatData.chats],
  });

  const newUserData = {
    ...loggedUser,
    chats: [newChatData, ...loggedUser.chats],
  };

  window.localStorage.setItem("finChatAccounts", JSON.stringify(allUsers));
  window.localStorage.setItem("finChatLoggedUser", JSON.stringify(newUserData));
  setChatData(newChatData);
};
