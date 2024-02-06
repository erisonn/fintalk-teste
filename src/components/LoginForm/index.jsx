import { Link } from "react-router-dom";
import "./index.scss";
const LoginForm = () => {
  return (
    <div className="Login-form">
      <form className="Login-form-content">
        <div>
          <h3>Username</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Password</h3>
          <input type="text" />
        </div>
        <div>
          <p>
            Don't have a account yet? <Link to="/sign-up">Sign up</Link>
          </p>
          <button className="Login-button">Continue</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
