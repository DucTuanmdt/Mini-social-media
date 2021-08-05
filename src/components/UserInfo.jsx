import {
  SchoolOutlined,
  WorkOutlineOutlined,
  FavoriteBorderOutlined,
  LocationOnOutlined,
  VisibilityOutlined,
} from "@material-ui/icons";

function UserInfo() {
  return (
    <div className="user-info-container">
      <ul className="list-reset list-info">
        <li className="item">
          <WorkOutlineOutlined />
          <span className="text-info">FPT Software</span>
        </li>
        <li className="item">
          <SchoolOutlined />
          <span className="text-info">
            University HoChiMinh city of Technology and Education
          </span>
        </li>
        <li className="item">
          <LocationOnOutlined />
          <span className="text-info">Ho Chi Minh city</span>
        </li>
        <li className="item">
          <FavoriteBorderOutlined />
          <span className="text-info">Single</span>
        </li>
        <li className="item">
          <VisibilityOutlined />
          <span className="text-info">127 followers</span>
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
