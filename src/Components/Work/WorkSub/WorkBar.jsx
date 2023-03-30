import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkBar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>{
    setClick(!click);
  }
  return (
    <ul className="nav__submenu absolute text-[1.2rem] p-1 border-white border-b-[2px]  border-l-[2px]  z-[9] bg-[#000000] rounded text-black space-y-1">
      <li onClick={handleClick} className="nav__submenu-item font-[3rem]  ">
        <NavLink to="/residential" className="flex m-2  px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black">Residential</NavLink>
      </li>
      <li onClick={handleClick} className="nav__submenu-item ">
        <NavLink to="/commercial" className="flex  m-2 px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Commertial</NavLink>
      </li>
      <li onClick={handleClick} className="nav__submenu-item ">
        <NavLink to="/hotelresort" className="flex m-2  px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Hotel & Resort</NavLink>
      </li>
      <li onClick={handleClick} className="nav__submenu-item ">
        <NavLink to="/interior" className="flex m-2 px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Interior</NavLink>
      </li>
    </ul>
  );
};
export default WorkBar;
