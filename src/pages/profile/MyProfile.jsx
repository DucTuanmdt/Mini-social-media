import UserProfile from "../../components/user-profile/UserProfile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFriendsOnline,
  getPostByUserId,
  getProfileUser,
} from "../../redux/actions/userAction";
import { scrollToTop } from "../../utils/utils";

function MyProfile() {
  const { id: userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser(userId));
    dispatch(getPostByUserId(userId));
    dispatch(getFriendsOnline());
    scrollToTop();
  }, [userId]);

  return (
    <div className="my-profile-container">
      <UserProfile></UserProfile>
    </div>
  );
}

export default MyProfile;
