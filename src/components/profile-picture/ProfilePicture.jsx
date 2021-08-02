import "./_profile-picture.scss";
import { CameraAltOutlined } from "@material-ui/icons";

function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <div className="cover-image">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/12/19/43/swans-6421355_960_720.jpg"
          alt="cover"
        />
        <button className="buttton-change-image">
          <CameraAltOutlined />
        </button>
      </div>
      <div className="profile-image">
        <img src="/assets/avatar.jpg" alt="avatar" />
        <button className="buttton-change-image">
          <CameraAltOutlined />
        </button>
      </div>
      <div className="user-info">
        <h1 className="user-name">Mai Duc Tuan</h1>
        <p className="user-quot">Hi every one!</p>
      </div>
    </div>
  );
}

export default ProfilePicture;
