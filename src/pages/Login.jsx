import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authenAction";

function Login() {
  const currentUser = useSelector((state) => state.authen.currentUser);

  const [enableLogin, setEnableLogin] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.id) {
      // redirect to home page after login successful
      window.location.href = "/";
    }
  }, [currentUser]);

  function handleInput({ target }) {
    setState({ ...state, [target.name]: target.value });
    setEnableLogin(state.email.length > 0 && state.password.length > 0);
  }

  function handleLogin() {
    if (state.email.length > 0 && state.password.length > 0) {
      dispatch(login(state));
    }
  }

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
          name="email"
          onInput={handleInput}
        />
        <input
          type="password"
          className="common-input"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />
        <button
          className="common-button button-login"
          disabled={!enableLogin}
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-link">Fotgot password?</p>
        <hr className="common-break-line" />
        <Link to="register">
          <button className="common-button button-register">
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
