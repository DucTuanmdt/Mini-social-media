import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecentFriend() {
  const listFriend = useSelector((state) => state.users.onlineFriends);
  const profileUser = useSelector((state) => state.users.profileUser);

  return (
    <div className="recent-friend-container">
      <h3 className="friend-title">Friends</h3>
      <p className="friends-quantity">{profileUser.totalFriends} friends</p>

      {listFriend.length && (
        <ul className="list-reset list-friend">
          {listFriend.slice(0, 12).map(({ id, avatar, name }, index) => (
            <Link className="item" key={index} to={`/profile/${id}`}>
              <img src={avatar} alt="avatar" />
              <p className="friend-name">{name}</p>
            </Link>
          ))}
        </ul>
      )}

      <button className="common-button button-see-more">See all friends</button>
    </div>
  );
}

export default RecentFriend;
