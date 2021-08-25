import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function AccountName({ id, name, avatar, isOnline, noMargin, size }) {
  return (
    <div className={`account-name ${noMargin ? "no-margin" : ""}`}>
      <div className="avatar-container">
        <Avatar url={avatar} size={size}></Avatar>
        {isOnline && (
          <div className="online-status" data-testid="online-status"></div>
        )}
      </div>
      <Link to={`/profile/${id}`} className="user-name">
        {name}
      </Link>
    </div>
  );
}

export default AccountName;
