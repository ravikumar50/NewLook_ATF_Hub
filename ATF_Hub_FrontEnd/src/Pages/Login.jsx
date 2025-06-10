import LoginButton from "../Components/LoginButton";
import { useMsal } from "@azure/msal-react";

const Login = () => {
  const { accounts } = useMsal();

  return (
    <div>
      <h2>Login Page</h2>
      <LoginButton />
    </div>
  );
};

export default Login;
