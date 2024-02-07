import { Navigate, useLocation } from "react-router-dom";
import { getLoggedUser } from "../../helpers/getLoggedUser";

const AuthHandler = ({ children }) => {
  const loggedUser = getLoggedUser();
  const location = useLocation();

  const invalidPathnames = ["/login", "/sign-up"];
  if (!loggedUser?.user && !invalidPathnames.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default AuthHandler;
