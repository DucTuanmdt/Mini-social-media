import ProfilePicture from "../components/user-profile/ProfilePicture";
import UserInfo from "../components/user-profile/UserInfo";
import RecentFriend from "../components/user-profile/RecentFriend";
import NewsFeed from "../components/news-feed/NewsFeed";
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
  }, [userId, dispatch]);

  return (
    <div className="user-profile">
      <ProfilePicture></ProfilePicture>
      <div className="content-container">
        <div className="left-side">
          <UserInfo></UserInfo>
          <RecentFriend></RecentFriend>
        </div>
        <NewsFeed></NewsFeed>
      </div>
    </div>
  );
}

export default Profile;
