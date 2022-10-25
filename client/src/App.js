import React from "react";

import "./style.css";
import { ReactComponent as Hamburger } from './icons/hamburgermenu.svg';
//import Login from "./components/LogIn";
import MainPage from "./pages/first";
import UsersPage from "./pages/second";
import DropdownMenu from "./components/Dropdown";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Tablejs from "./components/Table";



function App() {

  return (
    <div class="bg_image">
    <div className="main-div">
    <Navbar>
      <NavItem icon={<Hamburger />}>
        <DropdownMenu>Valikko</DropdownMenu>
      </NavItem>
    </Navbar>
      {/* <Router>
   
       <Route path="/" component={MainPage} />
       <Route exact path="/users" component={UsersPage} />
      </Router> */}
    <Tablejs />
    {/* <Login /> */}
    </div>
    </div>
  );
}

export default App;
