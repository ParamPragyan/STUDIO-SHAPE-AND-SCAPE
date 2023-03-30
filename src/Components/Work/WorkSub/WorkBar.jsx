// import { useState } from "react";
import React from "react";
// import { NavLink } from "react-router-dom";

const WorkBar = () => {
  return (
    <ul className="nav__submenu absolute text-[1.2rem] p-1 border-white border-b-[2px]  border-l-[2px]  z-[9] bg-[#000000] rounded text-black space-y-1">
      <li className="nav__submenu-item font-[3rem]  ">
        <a href="#" className="flex m-2  px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black">Residential</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex  m-2 px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Commertial</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex m-2  px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Hotel & Resort</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex m-2 px-5  text-gray-400 rounded-md hover:bg-gray-100
        hover:text-black" >Interior</a>
      </li>
    </ul>
  );
};
export default WorkBar;
