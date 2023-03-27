import React from 'react'
import bgi from "../assets/services-img1.jpg"
import "./Services.css"


const Services = () => {
  return (
<section className='hero '>
<div className="heading-services absolute bg-white"> <h1 className='absolute main-s-heading'>OUR SERVICES</h1></div>

<img className="bgimg" src= {bgi} alt = 'header img' />

<div className=" flex justify-center items-center text-white px-[1rem] pt-[3rem] container1">
  <div className="box1 mx-[2.5rem]"><h1 className='sh1'>ACHITECTURE</h1></div> 
  <div className="box2 mx-[2.5rem]"><h1 className='sh1'>ITERIOR</h1></div>
  <div className="box3 mx-[2.5rem]"><h1 className='sh1'>LANDSCAPE</h1></div>
  <div className="box4 mx-[2.5rem]"><h1 className='sh1'>OTHERS</h1></div>
</div>
<div className="container2 bg-black"><div className="text-board mx-[8rem] mb-[8rem]"></div></div>


    </section>  )
}

export default Services