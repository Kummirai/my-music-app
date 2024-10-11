import { loginEndpoint } from "../../../spotify";
import "./login.css";

function login() {
  return (
    <div className="logIn-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify logo"
        className="logo"
      />
      <a href={loginEndpoint} className="logIn-btn">
        Log In
      </a>
    </div>
  );
}

export default login;
