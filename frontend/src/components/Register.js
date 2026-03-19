import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("/api/register", {
        username,
        password,
        confirm_password: confirm
      });
      navigate("/success");
    } catch (err) {
      setError(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} />
      <button onClick={register}>Create</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Register;
