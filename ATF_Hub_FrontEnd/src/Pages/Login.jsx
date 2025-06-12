import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

function Login() {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    // If already logged in, redirect to home
    if (accounts.length > 0) {
      window.location.replace("/");
    } else {
      instance.loginRedirect(); // Automatically redirect to Microsoft login
    }
  }, [accounts, instance]);

  return null; // No UI
}

export default Login;
