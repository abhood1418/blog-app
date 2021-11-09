// Terra Claycamp

import { Link } from "react-router-dom";
import './Nav.css'

export function Nav(props) {
  return (
    <nav>
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/profile" className="nav-button">
        Profile
      </Link>
      <Link to="/post-create" className="nav-button">
        Create Post
      </Link>
      <Link to="/" onClick="signout-function" className="nav-button">
        Sign Out
      </Link>
    </nav>
  );
}
