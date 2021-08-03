import "./_login.scss";
import Avatar from "../../components/avatar/Avatar";
import { Link } from "react-router-dom";
function Register() {
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
        <input type="text" className="common-input" placeholder="Your name" />
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
        <input
          type="password"
          className="common-input"
          placeholder="Confirm password"
        />
        <button className="common-button button-login">Register</button>
        <hr className="common-break-line" />
        <p className="text-link">
          <Link to="/login">Already had account?</Link>
        </p>

        <Link to="/login">
          <button className="common-button button-register">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
