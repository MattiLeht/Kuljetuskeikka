import React from "react";
import "./style.css";
import { ReactComponent as Hamburger } from "./icons/hamburgermenu.svg";
//import Login from "./components/LogIn";

import DropdownMenu from "./components/Dropdown";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Tablejs from "./components/Table";
import Footer from "./components/footer";
function App() {
  return (
    <div class="bg_image">
      <div className="main-div">
        <Navbar>
          <NavItem icon={<Hamburger />}>
            <DropdownMenu>Valikko</DropdownMenu>
          </NavItem>
        </Navbar>
        <Tablejs />
        <Footer />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
