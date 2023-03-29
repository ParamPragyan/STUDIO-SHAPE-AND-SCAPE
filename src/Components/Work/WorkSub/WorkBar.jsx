// import { useState } from "react"
import React from "react";

const WorkBar = () => {
  return (
    <ul className="nav__submenu absolute p-1 bg-white rounded text-black space-y-1  ">
      <li className="nav__submenu-item  ">
        <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black">Residential</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black" >Commertial</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black" >Hotel & Resort</a>
      </li>
      <li className="nav__submenu-item ">
        <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100
        hover:text-black" >Interior</a>
      </li>
    </ul>
  );
};

export default WorkBar;
