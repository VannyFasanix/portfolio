import React from "react";
import { Link } from "gatsby";
import logo from "../assets/logo.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="title">
            <h3 className="title-animehouse">Vanny</h3>
            <h3 className="title-animehouse-black">Fasanelli</h3>
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
