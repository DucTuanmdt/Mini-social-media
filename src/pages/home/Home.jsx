import Sidebar from "../../components/sidebar/Sidebar";
import NewFeed from "../../components/new-feed/NewFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./_home.scss";

function Home() {
  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <NewFeed></NewFeed>
      <Rightbar></Rightbar>
    </div>
  );
}

export default Home;
