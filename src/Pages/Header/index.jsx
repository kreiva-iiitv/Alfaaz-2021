import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header({ opened }) {
  return (
    <header>
      <div className="tabs">
        <NavLink className="navstyles" to="/">
          <div className="tabs__logo__tab active">HOME</div>
        </NavLink>
        <NavLink className="navstyles" to="/events">
          <div className="tabs__logo__tab ">EVENTS</div>
        </NavLink>

        <NavLink className="navstyles" to="/members">
          <div className="tabs__logo__tab ">MEMBERS</div>
        </NavLink>
        <a className="navstyles" href="https://kreiva.tk/media/brochure.pdf">
          <div className="tabs__logo__tab ">BROCHURE</div>
        </a>
      </div>
    </header>
  );
}

export default Header;
