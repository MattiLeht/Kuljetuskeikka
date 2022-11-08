import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/LogIn";


import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Table from "./components/Table";
import Table2 from "./components/Table2";
import TableEdit from "./components/TableEdit";
import AddingLoad from "./components/AddingLoad";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className="bg_image">
      <div className="main-div">
        <Navbar>
          
          {/* <NavItem icon={<Hamburger />}>
          <DropdownMenu>Valikko</DropdownMenu>
          </NavItem> */}
          
        </Navbar>
      
        <Router>
          <Link to="/Table"> <button>Taulukko</button> </Link>
          <Link to="/AddingLoad"> <button>Lisää kuorma</button> </Link>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/AddingLoad" element={<AddingLoad />} />
            <Route path="/update/:id" element={<AddingLoad />} />
            <Route path="/TableEdit" element={<TableEdit />} />
            <Route path="*" element={<Error />}/>

            
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
