import { Navigate, useLocation } from "react-router-dom";

const AuthHandler = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const isLoggedIn = false;

  const invalidPathnames = ["/login", "/sign-up"];
  if (!isLoggedIn && !invalidPathnames.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default AuthHandler;
