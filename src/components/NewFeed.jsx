import ComposePost from "./ComposePost";
import Post from "./Post";
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
