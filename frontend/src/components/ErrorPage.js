import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Invalid Username or Password</h2>
      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default ErrorPage;
