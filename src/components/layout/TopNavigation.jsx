import {
  Search,
  PersonOutline,
  ChatBubbleOutline,
  NotificationsOutlined,
  ArrowDropDown,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearUser } from "../../utils/user";
import usePathname from "../../hooks/usePathName";

import AccountName from "../common/AccountName";

function TopNavigation() {
  const currentPath = usePathname();
  const currentUser = useSelector((state) => state.authen.currentUser);

  function isShow() {
    return !["/login", "/register"].includes(currentPath);
  }

  function handleLogout() {
    clearUser();
    window.location.href = "/login";
  }

  return (
    isShow() && (
      <div className="top-navigation">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo-react.png" alt="Logo" />
          </Link>
        </div>
        <div className="search-bar">
          <Search />
          <input
            className="search-input"
            type="text"
            placeholder="Search some thing"
          />
        </div>
        <div className="home tab-item">
          <PersonOutline />
          <div className="badge">1</div>
        </div>
        <div className="chat tab-item">
          <ChatBubbleOutline />
          <div className="badge">2</div>
        </div>
        <div className="notification tab-item">
          <NotificationsOutlined />
          <div className="badge">3</div>
        </div>

        <AccountName
          className="profile"
          {...currentUser}
          noMargin
          size="small"
        ></AccountName>

        <div className="menu-button button-icon">
          <ArrowDropDown />
          <ul className="menu-option list-reset">
            <li className="item">Give feedback</li>
            <li className="item">Setting</li>
            <li className="item">Help &amp; Support</li>
            <li className="item" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default TopNavigation;
