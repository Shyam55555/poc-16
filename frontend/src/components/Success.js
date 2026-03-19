import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <h2>User Created Successfully</h2>
      <Link to="/">Go to Login</Link>
    </div>
  );
}

export default Success;
