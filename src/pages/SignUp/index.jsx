import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Form from "../../components/Form";
import { axiosClient } from "../../clientConfig";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {
  const navigate = useNavigate();

  const createUser = useMutation({
    mutationKey: ["createUser"],
    mutationFn: (user) =>
      axiosClient.post("/register", user).then((res) => res.data),
  });

  const { success } = createUser?.data ?? {};

  const shouldRenderWarning = success === false;
 
  const handleSubmit = (event) => {
    const user = event.target[0].value;
    const password = event.target[1].value;

    event.preventDefault();

    createUser.mutate({
      userData: {
        user,
        password,
      },
    });
  };

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        navigate("login");
      }, 2000);
    };
    if (success) {
      timer();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [success, navigate]);

  if (createUser.isPending) return <p>Loading...</p>;

  if (success) {
    return (
      <div className="Signup-page">
        <h2>Account created sucessfully!</h2>
      </div>
    );
  }

  return (
    <div className="Signup-page">
      <h1>Sign up for Fin-Chat</h1>
      <Form
        handleSubmit={handleSubmit}
        buttonText={"Create account"}
        isSignUp
        warningText={shouldRenderWarning ? "Username not available" : ""}
      />
    </div>
  );
};
export default SignUp;
