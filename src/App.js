import "./styles/_variable.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TopNavigation from "./components/topNavigation/TopNavigation";
import MyProfile from "./pages/my-profile/MyProfile";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import "./styles/_common.scss";

function App() {
  return (
    <BrowserRouter>
      <TopNavigation></TopNavigation>
      <Route path="/" exact component={Home}></Route>
      <Route path="/my-profile" exact component={MyProfile}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
    </BrowserRouter>
  );
}

export default App;
