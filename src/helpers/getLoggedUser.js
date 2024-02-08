export const getLoggedUser = () => {
  const loggedUser = window.localStorage.getItem("finChatLoggedUser");
  const parsedLoggedUser = JSON.parse(loggedUser) ?? {};
  return parsedLoggedUser;
};

export const getAllUsers = () => {
  const allUsers = window.localStorage.getItem("finChatAccounts");
  const parsedAllUsers = JSON.parse(allUsers) ?? {};
  return parsedAllUsers;
};
