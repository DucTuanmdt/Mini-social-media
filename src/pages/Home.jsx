import Sidebar from "../components/layout/Sidebar";
import NewsFeed from "../components/news-feed/NewsFeed";
import Rightbar from "../components/layout/Rightbar";
import { useEffect, useState, useCallback } from "react";
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

  const loadMore = useCallback(
    (length) => {
      let maxSize = length || remainUser;
      if (maxSize > 0) {
        dispatch(loadMorePost({ listUser, pageSize, remainUser: maxSize }));
      }
    },
    [remainUser, listUser, dispatch]
  );

  useEffect(() => {
    dispatch(getFriendsOnline());
    dispatch(getShortcurt());
  }, [dispatch]);

  useEffect(() => {
    const length = listUser.length;
    if (length) {
      const userId = listUser[length - 1].id;
      dispatch(getPostByUserId(userId));
      setRemainUser(length - 2 - pageSize);
      loadMore(length - 2);
    }
  }, [listUser, loadMore, dispatch]);

  useEffect(() => {
    loadMore();

    function calculateNextPage() {
      let nextValue = remainUser - pageSize;
      if (nextValue < 0) {
        nextValue = 0;
      }
      setRemainUser(nextValue);
    }

    // prevent call loadMore too many time, at least 5s per dispatch
    const throttleLoadMore = throttling(calculateNextPage, timeOut);

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
  }, [remainUser, loadMore]);

  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <NewsFeed></NewsFeed>
      <Rightbar></Rightbar>
    </div>
  );
}

export default Home;
