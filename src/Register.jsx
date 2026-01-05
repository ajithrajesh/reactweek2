import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Registeration Page</h2>
      

      <input type="text" placeholder="enter name" /><br /><br />
      <input type="password" placeholder="enter Password" /><br /><br />

      <button   onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
