import { logUser } from "./getLoggedUser";

export const loginWithLocalStorage = (user, password, setState) => {
  const existingAccounts = window.localStorage.getItem("finChatAccounts");
  const parsedExistingAccounts = JSON.parse(existingAccounts) ?? [];

  const existingUser = parsedExistingAccounts.find(
    (accounts) => accounts?.user === user
  );

  const isLoginValid =
    user === existingUser?.user && password === existingUser?.password;

  if (isLoginValid) {
    logUser(user, password);
    return setState(true);
  }
  return setState(false);
};
