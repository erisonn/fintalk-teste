export const getLoggedUser = () => {
  const loggedUser = window.localStorage.getItem("finChatLoggedUser");
  const parsedLoggedUser = JSON.parse(loggedUser) ?? {};
  return parsedLoggedUser;
};

export const logUser = (user, password) => {
  const userData = {
    user,
    password,
  };
  window.localStorage.setItem("finChatLoggedUser", JSON.stringify(userData));
};
