import Sidebar from "../../components/sidebar/Sidebar";
import NewFeed from "../../components/new-feed/NewFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./_home.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriendsOnline,
  getPostByUserId,
  getShortcurt,
} from "../../redux/actions/userAction";
import { throttling } from "../../utils/utils";

import { loadMorePost } from "../../redux//actions/postAction";

function Home() {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.users.onlineFriends);
  const [remainUser, setRemainUser] = useState(0);
  const pageSize = 5;
  const timeOut = 5000;

  useEffect(() => {
    dispatch(getFriendsOnline());
    dispatch(getShortcurt());
  }, []);

  useEffect(() => {
    const length = listUser.length;
    if (length) {
      setRemainUser(length - 1);
      const userId = listUser[length - 1].id;
      dispatch(getPostByUserId(userId));
      loadMore(length - 2);
    }
  }, [listUser]);

  useEffect(() => {
    function handleScroll() {
      console.log(
        "CMN",
        window.innerHeight + window.scrollY,
        document.body.offsetHeight
      );
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        throttleLoadMore();
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function loadMore(length) {
    let maxSize = length || remainUser;
    console.log("Load more", length, remainUser);
    if (maxSize > 0) {
      dispatch(loadMorePost({ listUser, pageSize, remainUser: maxSize }));
      setRemainUser(maxSize - pageSize);
    }
  }
  // prevent call loadMore too many time, at least 5s per dispatch
  const throttleLoadMore = throttling(loadMore, timeOut);

  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <NewFeed></NewFeed>
      <Rightbar></Rightbar>
    </div>
  );
}

export default Home;
