import { loginEndpoint } from "../../spotify";
import "./login.css";

function Login() {
  return (
    <div className="logIn-page">
      <div className="logo">
        <img src="sound (1).png" alt="spotify logo" className="logo" />
        <h1 className="logIn-title">Musify</h1>
      </div>
      <div className="logIn-container">
        <a href={loginEndpoint} className="logIn-btn">
          Log In
        </a>
        <h2 className="logIn-text">With Spotify</h2>
      </div>
    </div>
  );
}

export default Login;
