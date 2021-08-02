import "./_sidebar.scss";
import {
  RssFeed,
  ChatBubbleOutline,
  PlayCircleOutline,
  GroupOutlined,
  BookmarkBorder,
  HelpOutline,
  WorkOutline,
  Event,
  SchoolOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list-container">
        <li className="item">
          <RssFeed className="sidebar-icon" />
          <span className="item-text">Feed</span>
        </li>
        <li className="item">
          <ChatBubbleOutline className="sidebar-icon" />
          <span className="item-text">Chat</span>
        </li>
        <li className="item">
          <PlayCircleOutline className="sidebar-icon" />
          <span className="item-text">Videos</span>
        </li>
        <li className="item">
          <GroupOutlined className="sidebar-icon" />
          <span className="item-text">Groups</span>
        </li>
        <li className="item">
          <BookmarkBorder className="sidebar-icon" />
          <span className="item-text">Bookmarks</span>
        </li>
        <li className="item">
          <HelpOutline className="sidebar-icon" />
          <span className="item-text">Questions</span>
        </li>
        <li className="item">
          <WorkOutline className="sidebar-icon" />
          <span className="item-text">Jobs</span>
        </li>
        <li className="item">
          <Event className="sidebar-icon" />
          <span className="item-text">Events</span>
        </li>
        <li className="item">
          <SchoolOutlined className="sidebar-icon" />
          <span className="item-text">Courses</span>
        </li>
      </ul>
      <hr />
      {/* <ul className="sidebarFriendList">
        {Users.map((u) => (
          <CloseFriend key={u.id} user={u} />
        ))}
      </ul> */}
      <ul className="list-container">
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
        <li>
          <div className="best-friend">
            <img
              src="https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg"
              alt="friends"
            />
            <span className="name">My Best Friend</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
