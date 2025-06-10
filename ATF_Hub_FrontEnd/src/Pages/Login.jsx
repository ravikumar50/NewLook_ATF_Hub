import { useMsal } from "@azure/msal-react";
import { Button } from "@/components/ui/button"; // if using shadcn or custom component
import "./Login.css"; // optional styling

function Login() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(); // Triggers Microsoft login
  };

  return (
    <div className="login-container">
      <h2>Welcome!</h2>
      <p>Please sign in to continue.</p>
      <Button onClick={handleLogin}>
        Login with Microsoft
      </Button>
    </div>
  );
}

export default Login;
