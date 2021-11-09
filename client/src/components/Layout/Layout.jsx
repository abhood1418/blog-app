// Terra Claycamp
import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";

function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
