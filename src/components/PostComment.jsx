import Avatar from "./Avatar";

function PostComment() {
  return (
    <div className="post-comment">
      <Avatar size="small"></Avatar>
      <div className="content">
        <p className="user-name">Mai Duc Tuan</p>
        <p className="comment">Xin chao tat ca cac ban</p>
      </div>
    </div>
  );
}

export default PostComment;
