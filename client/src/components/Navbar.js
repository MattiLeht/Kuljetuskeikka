import React from "react";
import {Link, Router} from "react-router-dom";

let today = new Date().toLocaleDateString()

console.log(today)

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-header">Kuljetuskeikkaohjelma</h1>
      <div>
     
      
      
      {today}
      </div>
    </nav>
  );
}

export default Navbar;