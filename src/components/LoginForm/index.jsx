import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { loginWithLocalStorage } from "../../helpers/loginWithLocalStorage";
import { useEffect, useState } from "react";
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
    <div className="Login-form">
      <form onSubmit={handleSubmit} className="Login-form-content">
        <div>
          <h3>Username</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Password</h3>
          <input type="password" />
        </div>
        <div>
          <p>
            Don't have a account yet? <Link to="/sign-up">Sign up</Link>
          </p>
          <input className="Login-button" type="submit" value="Continue" />
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
