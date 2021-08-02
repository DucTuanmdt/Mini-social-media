import "./_post.scss";
import Avatar from "../avatar/Avatar";
import {
  MoreHorizOutlined,
  ThumbUpAltOutlined,
  ChatBubbleOutline,
  ShareOutlined,
} from "@material-ui/icons";
function Post() {
  return (
    <div className="post-container">
      <div className="post-top">
        <div className="user-info">
          <Avatar></Avatar>
          <span className="name">Harry Potter</span>
          <span className="post-time">5 minutes</span>
        </div>
        <div className="action button-icon">
          <MoreHorizOutlined />
        </div>
      </div>
      <div className="content">
        <p className="text-content">Hey! This is my first post :V</p>
        <img
          className="post-image"
          src="http://placeimg.com/640/480/technics"
          alt="Post"
        />
      </div>
      <div className="post-bottom">
        <div className="post-info">
          <img className="like-icon" src="/assets/like.png" alt="like" />
          <span className="like-quantity">541 people like it</span>
          <div className="comment-quantity">147 comments</div>
        </div>
        <div className="post-action">
          <div className="action-item">
            <ThumbUpAltOutlined />
            <span className="text">Like</span>
          </div>
          <div className="action-item">
            <ChatBubbleOutline />
            <span className="text">Comment</span>
          </div>
          <div className="action-item">
            <ShareOutlined />
            <span className="text">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
