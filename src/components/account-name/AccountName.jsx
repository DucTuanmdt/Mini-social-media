import "./_account-name.scss";
import Avatar from "../avatar/Avatar";

function AccountName({ url, name, isOnline }) {
  return (
    <div className="account-name">
      <div className="avatar-container">
        <Avatar></Avatar>
        {isOnline && <div className="online-status"></div>}
      </div>
      <span className="account-name">{name}</span>
    </div>
  );
}

export default AccountName;
