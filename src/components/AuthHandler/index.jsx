import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../clientConfig";

const AuthHandler = ({ children }) => {
  const location = useLocation();

  const { data, isPending } = useQuery({
    queryKey: ["me"],
    queryFn: () => axiosClient.get("/me").then((res) => res.data),
  });

  const isLoggedIn = data?.user?.userId;

  const invalidPathnames = ["/login", "/sign-up"];

  if (isPending) return <p>Loading...</p>;

  if (!isLoggedIn && !invalidPathnames.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default AuthHandler;
