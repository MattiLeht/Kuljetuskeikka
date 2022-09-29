import React from "react";



function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
      <h1 className="navbar-header">Kuljetuskeikkaohjelma</h1>
    </nav>
  );
}

export default Navbar;