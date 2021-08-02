import "./_conpose-post.scss";
import Avatar from "../avatar/Avatar";
import {
  PhotoOutlined,
  LocationOnOutlined,
  InsertEmoticonOutlined,
  LocalOfferOutlined,
} from "@material-ui/icons";

function ComposePost() {
  return (
    <div className="compose-post">
      <div className="header">
        <Avatar size="medium" />
        <span className="question">What's on your mind, John? </span>
      </div>
      <div className="content">
        <input
          className="post-input"
          type="text"
          placeholder="Let's everyone know here"
        />
      </div>
      <ul className="aditional-option">
        <li className="item photo">
          <PhotoOutlined />
          <span className="media-name">Photo/Video</span>
        </li>
        <li className="item location">
          <LocationOnOutlined />
          <span className="media-name">Location</span>
        </li>
        <li className="item tag">
          <LocalOfferOutlined />
          <span className="media-name">Tag</span>
        </li>
        <li className="item felling">
          <InsertEmoticonOutlined />
          <span className="media-name">Felling</span>
        </li>
      </ul>
      <div className="submit-container">
        <button className="button-submit">Post</button>
      </div>
    </div>
  );
}

export default ComposePost;
