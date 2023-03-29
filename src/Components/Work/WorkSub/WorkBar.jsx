import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <ul className="nav__submenu absolute p-1 bg-[#ffffff6e] rounded text-black space-y-1">
      <li onClick={handleClick} className="nav__submenu-item">
        <NavLink
          
          className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black"
        to="/residential">
          Residential
        </NavLink>
      </li>

      <li onClick={handleClick} className="nav__submenu-item" >
        <NavLink
       
          className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black"
        to="/commercial">
          Commertial
        </NavLink>
      </li>

      <li onClick={handleClick} className="nav__submenu-item ">
        <NavLink
          
          className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black"
        to="/hotelresort">
          Hotel & Resort
        </NavLink>
      </li>

      <li onClick={handleClick} className="nav__submenu-item ">
        <NavLink
          
          className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black"
        to="/interior">
          Interior
        </NavLink>
      </li>
    </ul>
  );
};

export default WorkBar;
