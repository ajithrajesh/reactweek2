import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input type="text" placeholder="name" /><br /><br />
      <input type="password" placeholder="password" /><br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
