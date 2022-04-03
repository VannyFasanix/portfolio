import React from "react";
import { graphql, Link, StaticQueryDocument, useStaticQuery } from "gatsby";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="title">
            <StaticImage src="../images/hero-img-project.png" className="logo-navbar" layout="fixed" placeholder="tracedSVG" alt="logo" style={{height: 90, width: 90, paddingTop: 20}}/>
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
