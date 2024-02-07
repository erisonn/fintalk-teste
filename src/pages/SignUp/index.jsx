import { useEffect, useState } from "react";
import { CreateLocalStorageAccount } from "../../helpers/createLocalStorageAccount";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isAccountCreateSuccessful, setIsAccountCreateSuccessful] =
    useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const user = event.target[0].value;
    const password = event.target[1].value;

    event.preventDefault();

    CreateLocalStorageAccount(user, password, setIsAccountCreateSuccessful);
  };

  useEffect(() => {
    if (isAccountCreateSuccessful) {
      setTimeout(() => {
        navigate("login");
      }, 2000);
    }
    // CLEAR TIMEOUT!!!!
  }, [isAccountCreateSuccessful]);

  if (isAccountCreateSuccessful) {
    return <h2>Account created sucessfully!</h2>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <input type="submit" value={"Create account"} />
        {isAccountCreateSuccessful === false && <p>Username not available</p>}
      </form>
    </div>
  );
};
export default SignUp;
