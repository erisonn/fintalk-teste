import { useNavigate } from "react-router-dom";
import { loginWithLocalStorage } from "../../helpers/loginWithLocalStorage";
import { useEffect, useState } from "react";
import Form from "../Form";

const LoginForm = () => {
  const [isLoginValid, setIsLoginValid] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const password = event.target[1].value;
    loginWithLocalStorage(user, password, setIsLoginValid);
  };

  useEffect(() => {
    if (isLoginValid) {
      setTimeout(() => {
        navigate("/messages");
      }, 2000);
    }

    // CLEAR TIMEOUT!!!!
  }, [isLoginValid]);

  if (isLoginValid) {
    return <h3>Logged in successfully!</h3>;
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      buttonText={"Continue"}
      warningText={isLoginValid === false ? "Wrong password" : ""}
    />
  );
};
export default LoginForm;
