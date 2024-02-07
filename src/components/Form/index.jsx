import "./index.scss";
import { Link } from "react-router-dom";

const Form = ({ handleSubmit, isSignUp, buttonText, warningText }) => {
  return (
    <div className="Form">
      <form onSubmit={handleSubmit} className="Form-content">
        <div>
          <h3>Username</h3>
          <input type="text" required pattern="^[0-9A-Za-z]{6,16}$" />
          <p className="Form-reasoning">
            Must be between 6 and 16 alphanumeric characters
          </p>
        </div>
        <div>
          <h3>Password</h3>
          <input type="password" required pattern="^[0-9A-Za-z]{8,32}$" />
          <p className="Form-reasoning">
            Must be between 8 and 32 alphanumeric characters
          </p>
        </div>
        <div>
          {isSignUp ? (
            <p>
              Already have an account?{" "}
              <Link className="Login-link" to="/login">
                Log in
              </Link>
            </p>
          ) : (
            <p>
              Don't have a account yet?{" "}
              <Link className="Signup-link" to="/sign-up">
                Sign up
              </Link>
            </p>
          )}
          <input
            className="Form-content-button"
            type="submit"
            value={buttonText}
          />
          {warningText && <p className="Warning-text">{warningText}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
