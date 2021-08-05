import Avatar from "./Avatar";
import {
  PhotoOutlined,
  LocationOnOutlined,
  InsertEmoticonOutlined,
  LocalOfferOutlined,
} from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { createPost } from "../redux/actions/postAction";

function ComposePost({ editMode, onUpdate, oldContent }) {
  const currentUser = useSelector((state) => state.authen.currentUser);
  const loading = useSelector((state) => state.post.loading);
  const error = useSelector((state) => state.post.error);
  const [postContent, setPostContent] = useState("");
  const [localLoading, setLocalLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      setLocalLoading(false);
    }
    // reset post content after created success
    if (!loading && !error) {
      setPostContent("");
    }
  }, [loading]);

  useEffect(() => {
    if (editMode) {
      setPostContent(oldContent);
    }
  }, []);

  function handleInput(event) {
    setPostContent(event.target.value);
  }

  function handleCreatePost() {
    if (postContent) {
      setLocalLoading(true);
      dispatch(
        createPost({
          content: postContent,
          userId: currentUser.id,
          totalLike: 0,
          haveImage: 0,
          timeCreated: new Date().toString(),
        })
      );
    }
  }

  function handleUpdatePost() {
    onUpdate({
      content: postContent,
    });
  }

  return (
    <div className={`compose-post ${localLoading ? "loading" : ""}`}>
      {currentUser && currentUser.id ? (
        <div className="header">
          <Avatar size="medium" url={currentUser.avatar} />
          <span className="question">
            What's on your mind, {currentUser.name}?{" "}
          </span>
        </div>
      ) : (
        <></>
      )}
      <div className="content">
        <input
          className="post-input"
          type="text"
          placeholder="Let's everyone know here"
          onInput={handleInput}
          value={postContent}
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
        <button
          className="button-submit common-button"
          onClick={editMode ? handleUpdatePost : handleCreatePost}
          disabled={!postContent.length}
        >
          {editMode ? "Update" : "Post"}
        </button>
      </div>
    </div>
  );
}

export default ComposePost;
