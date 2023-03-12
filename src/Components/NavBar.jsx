import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
   <nav className="navbar">
    <h3 className="logo">Logo</h3>

    <ul className="nav-links">
        <NavLink to = '/'><li>Home</li></NavLink>
        <NavLink to = '/about'><li>About</li></NavLink>
        <NavLink to = '/services'><li>Services</li></NavLink>
        <NavLink to = '/work'><li>Works</li></NavLink>
        <NavLink to = '/contact'><li>Contact</li></NavLink>

    </ul>
   </nav>
  )
}

export default NavBar