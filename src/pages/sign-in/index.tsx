import React, { useContext } from "react";
import SignIn from "../../components/auth/sign-in";
import { AuthContext } from "../../services/contexts/auth-context";
import { Navigate } from "react-router-dom";

const SignInPage: React.FC<{}> = (props: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("SignInPage", isAuthenticated);
  return isAuthenticated ? <Navigate to="/" /> : <SignIn />;
}

export default SignInPage;