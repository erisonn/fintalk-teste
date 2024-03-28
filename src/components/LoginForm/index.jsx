import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Form from "../Form";
import { axiosClient } from "../../clientConfig";

const LoginForm = () => {
  const navigate = useNavigate();

  const logUser = useMutation({
    mutationKey: ["logUser"],
    mutationFn: (user) =>
      axiosClient.post("/login", user).then((res) => res.data),
    onSuccess: () => {
      navigate("messages");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const password = event.target[1].value;

    logUser.mutate({
      userData: {
        user,
        password,
      },
    });
  };

  const { success, message } = logUser?.data ?? {};

  if (logUser.isPending) return <p>Loading...</p>;

  return (
    <Form
      handleSubmit={handleSubmit}
      buttonText={"Continue"}
      warningText={success === false ? message : ""}
    />
  );
};
export default LoginForm;
