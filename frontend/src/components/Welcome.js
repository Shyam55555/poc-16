import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Welcome;
