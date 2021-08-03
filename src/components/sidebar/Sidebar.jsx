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

import { useSelector } from "react-redux";

export default function Sidebar() {
  const listShortCurt = useSelector((state) => state.users.shortCurts);

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

      {listShortCurt.length > 0 && (
        <>
          <p className="short-curt-title">Your Shortcurts</p>
          <ul className="list-container list-short-curt">
            {listShortCurt.slice(0, 10).map(({ image, text }, index) => (
              <li key={index}>
                <div className="shorcurt-item">
                  <img src={image} alt="friends" />
                  <span className="name">{text}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="common-button button-see-more">See more</button>
        </>
      )}
    </div>
  );
}
