import "./_not-found.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found-page">
      <img src="/assets/page-not-found.jpg" alt="Page not found" />

      <Link className="back-link" to="/">
        <button className="common-button back-button">Back to home page</button>
      </Link>
    </div>
  );
}

export default NotFound;
