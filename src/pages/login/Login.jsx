import "./_login.scss";
import Avatar from "../../components/avatar/Avatar";
function Login() {
  return (
    <div className="container-wrapper login-container">
      <div className="intro-section">
        <Avatar size="large" url="/assets/logo-react.png"></Avatar>
        <h1 className="name">Social network</h1>
        <p className="desctiption">
          We help you connect and share with the people in your life.
        </p>
      </div>

      <div className="form-section">
        <input
          type="text"
          className="common-input"
          placeholder="Email address or phone number"
        />
        <input
          type="password"
          className="common-input"
          placeholder="Password"
        />
        <button className="common-button button-login">Login</button>
        <p className="text-link">Fotgot password?</p>
        <hr className="common-break-line" />
        <button className="common-button button-register">
          Create New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
