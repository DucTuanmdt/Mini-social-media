import "./_new-feed.scss";
import ComposePost from "../compose-post/ComposePost";
import Post from "../post/Post";
import { useSelector } from "react-redux";

function NewFeed() {
  const listPost = useSelector((state) => state.post.listPost);
  return (
    <div className="new-feed">
      <ComposePost></ComposePost>
      {listPost.length > 0 &&
        listPost.map((post, index) => <Post key={index} {...post}></Post>)}
    </div>
  );
}

export default NewFeed;
