import "./_recent-friend.scss";

function RecentFriend() {
  return (
    <div className="recent-friend-container">
      <h3 className="friend-title">Friends</h3>
      <p className="friends-quantity">573 friends</p>
      <ul className="list-reset list-friend">
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker</p>
        </li>
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker</p>
        </li>
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker Peter Parker</p>
        </li>
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker</p>
        </li>
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker</p>
        </li>
        <li className="item">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
          <p className="friend-name">Peter Parker</p>
        </li>
      </ul>
      <button className="common-button button-see-more">See all friends</button>
    </div>
  );
}

export default RecentFriend;
