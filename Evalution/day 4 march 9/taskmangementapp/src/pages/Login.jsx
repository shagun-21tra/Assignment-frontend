import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
