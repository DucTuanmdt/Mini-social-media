import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./redux/actions/authenAction";
import PrivateRoute from "./route/PrivateRoute";

import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import HorizontalLoader from "./components/HorizontalLoader";

import { getLocalUser } from "./utils/user";

function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(!!getLocalUser());
  const currentUser = useSelector((state) => state.authen.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    if (isLogin && !currentUser) {
      setIsLogin(false);
    }
  }, [currentUser]);

  return (
    <BrowserRouter>
      <HorizontalLoader></HorizontalLoader>
      <TopNavigation></TopNavigation>
      <Switch>
        <PrivateRoute
          path="/login"
          exact
          isAllow={!isLogin}
          redirectPath="/"
          component={Login}
        ></PrivateRoute>
        <PrivateRoute
          path="/register"
          exact
          isAllow={!isLogin}
          redirectPath="/"
          component={Register}
        ></PrivateRoute>
        <PrivateRoute
          path="/"
          exact
          isAllow={isLogin}
          component={Home}
        ></PrivateRoute>
        <PrivateRoute
          path="/profile/:id"
          exact
          isAllow={isLogin}
          component={Profile}
        ></PrivateRoute>
        <PrivateRoute isAllow={isLogin} component={NotFound}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
