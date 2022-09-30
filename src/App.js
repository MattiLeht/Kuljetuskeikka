import React from "react";
import "./style.css";
import { ReactComponent as Hamburger } from './icons/hamburgermenu.svg';
import Login from "./components/LogIn";

import DropdownMenu from "./components/Dropdown";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Table from "./components/Table";



function App() {
  return (
    <div>
    <Navbar>
      <NavItem icon={<Hamburger />}>
        <DropdownMenu>Valikko</DropdownMenu>
      </NavItem>
    </Navbar>
    <Table />
    {/* <Login /> */}
    </div>
  );
}

export default App;