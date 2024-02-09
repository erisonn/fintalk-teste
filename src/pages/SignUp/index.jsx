import { useEffect, useState } from "react";
import { createLocalStorageAccount } from "../../helpers/createLocalStorageAccount";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Form from "../../components/Form";

const SignUp = () => {
  const [isAccountCreateSuccessful, setIsAccountCreateSuccessful] =
    useState(null);

  const shouldRenderWarning = isAccountCreateSuccessful === false;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const user = event.target[0].value;
    const password = event.target[1].value;

    event.preventDefault();

    createLocalStorageAccount(user, password, setIsAccountCreateSuccessful);
  };

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        navigate("login");
      }, 2000);
    };
    if (isAccountCreateSuccessful) {
      timer();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAccountCreateSuccessful]);

  if (isAccountCreateSuccessful) {
    return (
      <div className="Signup-page">
        <h2>Account created sucessfully!</h2>
      </div>
    );
  }

  return (
    <div className="Signup-page">
      <h1>Sign up for Fin-Chat</h1>
      <Form
        handleSubmit={handleSubmit}
        buttonText={"Create account"}
        isSignUp
        warningText={shouldRenderWarning ? "Username not available" : ""}
      />
    </div>
  );
};
export default SignUp;
