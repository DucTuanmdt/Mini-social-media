import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authenAction";
import SimpleDialog from "../components/SimpleDialog";

function Register() {
  const currentUser = useSelector((state) => state.authen.currentUser);

  const [enableRegister, setEnableRegister] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setEnableRegister(checkValidForm());
  }, [state]);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      setShowDialog(true);
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  function handleInput({ target }) {
    setState({ ...state, [target.name]: target.value });
  }

  function handleRegister() {
    if (enableRegister) {
      dispatch(register(state));
    }
  }

  function checkValidForm() {
    for (let key in state) {
      let value = state[key];
      if (!value.length && !value.trim().length) {
        return false;
      }
    }
    return state.password === state.confirmPassword;
  }

  function handleClosePopup() {
    setShowDialog(false);
    window.location.href = "/login";
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
          placeholder="Your name"
          name="name"
          onInput={handleInput}
        />
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
          onInput={handleInput}
        />
        <input
          type="password"
          className="common-input"
          placeholder="Confirm password"
          name="confirmPassword"
          onInput={handleInput}
        />
        <button
          className="common-button button-login"
          disabled={!enableRegister}
          onClick={handleRegister}
        >
          Register
        </button>
        <hr className="common-break-line" />
        <p className="text-link">
          <Link to="/login">Already had account?</Link>
        </p>

        <Link to="/login">
          <button className="common-button button-register">Login</button>
        </Link>
      </div>

      <SimpleDialog
        show={showDialog}
        onClose={handleClosePopup}
        size="medium"
        showCloseButton={false}
      >
        <div className="register-message">
          <p className="message">
            Your account is created successfully, you will be redirect to login
            page.
          </p>
          <div className="action">
            <button
              className="common-button button-action"
              onClick={handleClosePopup}
            >
              Ok
            </button>
          </div>
        </div>
      </SimpleDialog>
    </div>
  );
}

export default Register;
