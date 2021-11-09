// Terra Claycamp
import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";

export function Layout(props) {
  return (
    <div>
      <Nav />

<<<<<<< HEAD
      <Footer />
    </div>
  );
=======
	return (
		<div>
			<Nav />
      <div className="layout-children">
        {props.children}
      </div>
			<Footer />
		</div>
	)
>>>>>>> 0ce689739c3f2585032a09d7d0a99bdd2bdabc8d
}

export default Layout