import ProfilePicture from "../components/ProfilePicture";
import UserInfo from "../components/UserInfo";
import RecentFriend from "../components/RecentFriend";
import NewFeed from "../components/NewFeed";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFriendsOnline,
  getPostByUserId,
  getProfileUser,
} from "../redux/actions/userAction";
import { scrollToTop } from "../utils/utils";

function Profile() {
  const { id: userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser(userId));
    dispatch(getPostByUserId(userId));
    dispatch(getFriendsOnline());
    scrollToTop();
  }, [userId]);

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

export default Profile;
