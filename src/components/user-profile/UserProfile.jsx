import "./_user-profile.scss";
import ProfilePicture from "../profile-picture/ProfilePicture";
import UserInfo from "../user-info/UserInfo";
import RecentFriend from "../recent-friend/RecentFriend";
import NewFeed from "../new-feed/NewFeed";

function UserProfile() {
  return (
    <div className="user-profile">
      <ProfilePicture></ProfilePicture>
      <div className="content-container">
        <div className="left-side">
          <UserInfo></UserInfo>
          <RecentFriend></RecentFriend>
        </div>
        <NewFeed></NewFeed>
      </div>
    </div>
  );
}

export default UserProfile;
