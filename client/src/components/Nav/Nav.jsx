// Terra Claycamp

import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <nav>
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/profile" className="nav-button">
        Profile
      </Link>
      <Link to="/" className="nav-button">
        Create Post
      </Link>
      <Link to="/" onClick="signout-function" className="nav-button">
        Sign Out
      </Link>
    </nav>
  );
}
