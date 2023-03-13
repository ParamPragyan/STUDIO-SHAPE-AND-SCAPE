import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
   <nav className="navbar">
    <h3 className="logo">Logo</h3>

    <div className="nav-links">
        <NavLink to = '/' className="link">Home</NavLink>
        <NavLink to = '/about' className="link">About</NavLink>
        <NavLink to = '/services' className="link">Services</NavLink>
        <NavLink to = '/work' className="link">Works</NavLink>
        <NavLink to = '/contact' className="link">Contact</NavLink>
 
    </div>
   </nav>
  )
}

export default NavBar