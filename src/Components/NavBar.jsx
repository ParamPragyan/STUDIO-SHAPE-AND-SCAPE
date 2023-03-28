import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css";
// import WorkBar from "./Work/WorkSub/WorkBar";


const NavBar = () => {
  const [click, setClick] = useState(false);
  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    // <div className={color ? "header header-bg" : "header"}>
    //   <nav className="navbar">
    //     <h3 className="logo">Logo</h3>

    //     <div className="nav-links">
    //       <NavLink to="/" className="link">
    //         Home
    //       </NavLink>
    //       <NavLink to="/about" className="link">
    //         About
    //       </NavLink>
    //       <NavLink to="/services" className="link">
    //         Services
    //       </NavLink>
    //       <NavLink to="/work" className="link">
    //         Works
    //       </NavLink>
    //       <NavLink to="/contact" className="link">
    //         Contact
    //       </NavLink>
    //     </div>
    //   </nav>
    // </div>

    <div className='header-bg'>
      <div>
        <div className="nav-bar">
          {/* <h1 className="logo">Logo</h1> */}
          <Link to="/">
            <div className="Toggle pr-[3rem] text-white">Logo</div>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
             <li onClick={handleClick}>
              <NavLink className="nav-link " to="/services">
                 Services
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link nav-Work" to="/work">
                Works
                {/* <WorkBar/> */}
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          <div className="number text-white">+91 1234567890</div>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
