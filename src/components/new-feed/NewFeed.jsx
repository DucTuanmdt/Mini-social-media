import "./_new-feed.scss";
import ComposePost from "../compose-post/ComposePost";
import Post from "../post/Post";

function NewFeed() {
  return (
    <div className="new-feed">
      <ComposePost></ComposePost>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default NewFeed;
