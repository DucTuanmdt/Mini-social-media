import "./_rightbar.scss";
import AccountName from "../account-name/AccountName";

function Rightbar() {
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
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
        <AccountName name="Mai Duc Tuan" isOnline={true}></AccountName>
      </div>
    </div>
  );
}

export default Rightbar;
