import React from "react";

let today = new Date().toLocaleDateString()

console.log(today)

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
      <h1 className="navbar-header">Kuljetuskeikkaohjelma</h1>
      
      
      {today}
    </nav>
  );
}

export default Navbar;