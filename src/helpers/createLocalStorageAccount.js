import { chatMock } from "../mock";

export const createLocalStorageAccount = (user, password, setState) => {
  const existingAccounts = window.localStorage.getItem("finChatAccounts");
  const parsedExistingAccounts = JSON.parse(existingAccounts) ?? [];
  const userNameAlreadyExists = parsedExistingAccounts.find(
    (accounts) => accounts?.user === user
  );

  const accountData = {
    id: crypto.randomUUID(),
    user,
    password,
    chats: chatMock,
  };

  if (!userNameAlreadyExists || !parsedExistingAccounts.length) {
    const newExistingAccounts = [...parsedExistingAccounts, accountData];
    window.localStorage.setItem(
      "finChatAccounts",
      JSON.stringify(newExistingAccounts)
    );
    return setState(true);
  }
  return setState(false);
};
