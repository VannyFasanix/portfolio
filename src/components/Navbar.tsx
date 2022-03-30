import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="title">
            <img src={logo} alt="logo" style={{height: 200, width: 300, paddingTop: 20}}/>
          </div>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
