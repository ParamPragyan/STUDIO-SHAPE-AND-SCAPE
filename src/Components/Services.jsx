import React from 'react'
import { useState } from "react";

import bgi from "../assets/services-img1.jpg"
import data from "./data.json"
import "./Services.css"


const Services = () => {

  const [currentIdx, setCurrentIndex] = useState(0);

  return (
<section className='hero '>
<div className="heading-services absolute bg-white"> <h1 className='absolute main-s-heading'>OUR SERVICES</h1></div>

<img className="bgimg" src= {bgi} alt = 'header img' />

<div className=" flex justify-center items-center text-white px-[1rem] pt-[3rem] container1">
  {/* <div className="box1 mx-[2.5rem]"><h1 className='sh1'>{data.services[0].heading}</h1></div> 
  <div className="box2 mx-[2.5rem]"><h1 className='sh1'>ITERIOR</h1></div>
  <div className="box3 mx-[2.5rem]"><h1 className='sh1'>LANDSCAPE</h1></div>
  <div className="box4 mx-[2.5rem]"><h1 className='sh1'>OTHERS</h1></div> */}
  {
            (data.services.map((services, idx) => (
              <div
                className={idx === currentIdx ? "box1 sh1" : "sh2 box2"}
                onClick={() =>

                  setCurrentIndex(idx)}>
                {services.heading}
                
              </div>
            
              
            )))
          }


</div>
<div className="container2 bg-black"><div className="text-board flex justify-center items-center mx-[8rem] mb-[8rem]">
  <h1 className='text-white flex justify-center items-center'>
  {data.services[currentIdx].txt}
            <a href={data.services[currentIdx].link} target="_blank">
              {/* {data.services[currentIdx].heading} */}
            </a>
  </h1>
  </div></div>


    </section>  )
}

export default Services