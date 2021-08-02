import "./_top-navigation.scss";
import {
  Search,
  PersonOutline,
  Menu,
  ChatBubbleOutline,
  NotificationsOutlined,
} from "@material-ui/icons";

import usePathname from "../../hooks/usePathName";

function TopNavigation() {
  const currentPath = usePathname();

  function isShow() {
    return !["/login", "/register"].includes(currentPath);
  }

  return (
    isShow() && (
      <div className="top-navigation">
        <div className="logo">
          <img src="/assets/logo-react.png" alt="Logo" />
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
        <div className="profile">
          <img
            src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
            alt="profile"
          />
          <span className="name">Mark Zuc Duz</span>
        </div>
        <div className="menu tab-item">
          <Menu />
        </div>
      </div>
    )
  );
}

export default TopNavigation;
