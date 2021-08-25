import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MoreHorizOutlined,
  ThumbUpAltOutlined,
  ChatBubbleOutline,
  ShareOutlined,
} from "@material-ui/icons";
import Avatar from "../common/Avatar";
import SimpleDialog from "../common/SimpleDialog";
import ComposePost from "./ComposePost";
import { formatTimeAgo, isValidDate } from "../../utils/format";
// import PostComment from "./PostComment";
import { deletePost, updatePost } from "../../redux/actions/postAction";

function Post({
  id,
  user,
  content,
  totalLike,
  totalComment,
  image,
  haveImage,
  createdAt,
  timeCreated,
  comments,
}) {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const currentUser = useSelector((state) => state.authen.currentUser);
  const loading = useSelector((state) => state.post.loading);
  const timePosted = isValidDate(timeCreated) ? timeCreated : createdAt;
  const author = user || currentUser;
  const dispatch = useDispatch();
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLocalLoading(false);
    }
  }, [loading]);

  function handleDeletePost() {
    setShowDeletePopup(true);
  }

  function handleCloseDeletePopup() {
    setShowDeletePopup(false);
  }

  function handleEditPost() {
    setShowEditPopup(true);
  }

  function handleCloseEditopup() {
    setShowEditPopup(false);
  }

  function doDeletePost() {
    setLocalLoading(true);
    dispatch(
      deletePost({
        id: id,
        userId: author.id,
      })
    );
    handleCloseDeletePopup();
  }

  function doUpdatePost(data) {
    setLocalLoading(true);
    dispatch(
      updatePost({
        ...data,
        id,
        userId: author.id,
      })
    );
    handleCloseEditopup();
  }

  return (
    <div className={`post-container ${localLoading ? "loading" : ""}`}>
      <div className="post-top">
        <div className="user-info">
          <Avatar url={author.avatar}></Avatar>
          <Link className="name" to={`/profile/${author.id}`}>
            {author.name}
          </Link>
          <span className="post-time">{formatTimeAgo(timePosted)}</span>
        </div>
        <div className="more-option button-icon" data-testid="more-option">
          <MoreHorizOutlined />
          <ul
            role="menu"
            className="post-menu list-reset"
            data-testid="menu-option"
          >
            {author.id === currentUser.id && (
              <>
                <li role="menuitem" className="item" onClick={handleEditPost}>
                  Edit
                </li>
                <li role="menuitem" className="item" onClick={handleDeletePost}>
                  Delete
                </li>
              </>
            )}
            <li role="menuitem" className="item">
              Embed
            </li>
            {author.id !== currentUser.id && (
              <>
                <li role="menuitem" className="item">
                  Hide post
                </li>
                <li role="menuitem" className="item">
                  Report
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="content">
        <p className="text-content">{content}</p>
        {/* !Temple logic to display/hide image */}
        {haveImage > 50 && (
          <img className="post-image" src={image} alt="Post" />
        )}
      </div>
      <div className="post-bottom">
        <div className="post-info">
          <img className="like-icon" src="/assets/like.png" alt="like" />
          <span className="like-quantity">{totalLike} people like it</span>
          <div className="comment-quantity">{totalComment} comments</div>
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
      {/* <div className="comment-section">
        <PostComment></PostComment>
      </div> */}

      <SimpleDialog show={showDeletePopup} onClose={handleCloseDeletePopup}>
        <div className="confirm-delete">
          <p className="question">Do you want to delete this post?</p>
          <div className="action">
            <button className="common-button" onClick={doDeletePost}>
              Delete
            </button>
            <button
              className="common-button button-cancel"
              onClick={handleCloseDeletePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      </SimpleDialog>
      <SimpleDialog
        show={showEditPopup}
        onClose={handleCloseEditopup}
        size="large"
        noPadding={true}
      >
        <ComposePost
          editMode={true}
          onUpdate={doUpdatePost}
          oldContent={content}
        ></ComposePost>
      </SimpleDialog>
    </div>
  );
}

export default Post;
