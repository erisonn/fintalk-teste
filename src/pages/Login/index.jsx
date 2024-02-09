import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { getLoggedUser } from "../../helpers/getLoggedUser";
import "./index.scss";

const Login = () => {
  const loggedUser = getLoggedUser();

  if (loggedUser?.user) {
    return <Navigate to="/messages" />;
  }

  return (
    <div className="Login-page">
      <div className="Left-container">
        <h1>Fin-Chat</h1>
        <LoginForm />
      </div>
      <div className="Right-container"><h1>Fin-Chat</h1></div>
    </div>
  );
};
export default Login;
