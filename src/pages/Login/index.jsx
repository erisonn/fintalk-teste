import LoginForm from "../../components/LoginForm";
import "./index.scss";

const Login = () => {
  return (
    <div className="Login-page">
      <div className="Left-container">
        <h1>Fin-Chat</h1>
        <LoginForm />
      </div>
      <div className="Right-container"></div>
    </div>
  );
};
export default Login;
