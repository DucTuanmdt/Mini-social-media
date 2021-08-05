import AccountName from "./AccountName";
import { useSelector } from "react-redux";

function Rightbar() {
  const onlineFriends = useSelector((state) => state.users.onlineFriends);
  return (
    <div className="rightbar-container">
      <div className="birday-section">
        <img src="/assets/gift.png" alt="Birthday" />
        <p className="birthday-info">
          <strong>Mark Zuck Zuc</strong> and <strong>2 others friends</strong>{" "}
          have a birthday today.
        </p>
      </div>

      <div className="advertising">
        <img src="/assets/ad.png" alt="Advertirsing" />
      </div>
      <div className="online-friends">
        <p className="online-friend-label">
          <strong>Online friends</strong>
        </p>
        {onlineFriends.length > 0 &&
          onlineFriends.map(({ id, name, avatar }, index) => (
            <AccountName
              key={index}
              id={id}
              name={name}
              avatar={avatar}
              isOnline={true}
            ></AccountName>
          ))}
      </div>
    </div>
  );
}

export default Rightbar;
