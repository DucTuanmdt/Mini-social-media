import Sidebar from "../components/Sidebar";
import NewFeed from "../components/NewFeed";
import Rightbar from "../components/Rightbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriendsOnline,
  getPostByUserId,
  getShortcurt,
} from "../redux/actions/userAction";
import { loadMorePost } from "../redux//actions/postAction";

import { throttling } from "../utils/utils";

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
      const userId = listUser[length - 1].id;
      dispatch(getPostByUserId(userId));
      setRemainUser(length - 2 - pageSize);
      loadMore(length - 2);
    }
  }, [listUser]);

  useEffect(() => {
    loadMore();

    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        // TODO: temporary disable to avoid api is call too much
        throttleLoadMore();
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [remainUser]);

  function loadMore(length) {
    let maxSize = length || remainUser;
    if (maxSize > 0) {
      dispatch(loadMorePost({ listUser, pageSize, remainUser: maxSize }));
    }
  }

  // prevent call loadMore too many time, at least 5s per dispatch
  const throttleLoadMore = throttling(calculateNextPage, timeOut);

  function calculateNextPage() {
    let nextValue = remainUser - pageSize;
    if (nextValue < 0) {
      nextValue = 0;
    }
    setRemainUser(nextValue);
  }

  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <NewFeed></NewFeed>
      <Rightbar></Rightbar>
    </div>
  );
}

export default Home;
