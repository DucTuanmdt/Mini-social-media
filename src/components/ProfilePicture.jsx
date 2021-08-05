import { CameraAltOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

function ProfilePicture() {
  const loading = useSelector((state) => state.users.loading);
  const user = useSelector((state) => state.users.profileUser);
  const loginedUser = useSelector((state) => state.authen.currentUser);
  return (
    <div className="profile-picture-container">
      <div className="cover-image">
        <img
          src={loading ? "/assets/image-placeholder.png" : user.coverImage}
          alt="cover"
        />
        {loginedUser.id === user.id && (
          <button className="buttton-change-image">
            <CameraAltOutlined />
          </button>
        )}
      </div>
      <div className="profile-image">
        <img
          src={loading ? "/assets/image-placeholder.png" : user.avatar}
          alt="avatar"
        />
        {loginedUser.id === user.id && (
          <button className="buttton-change-image">
            <CameraAltOutlined />
          </button>
        )}
      </div>
      <div className="user-info">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-quot">{user.qoutSentence}</p>
      </div>
    </div>
  );
}

export default ProfilePicture;
