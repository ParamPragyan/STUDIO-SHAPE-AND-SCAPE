import React from 'react'
import "./Habout.css"
// import Fade from "react-reveal/Fade";

import img from "../../../assets/img-habout.jpg"

const Habout = () => {
  return ( 
    <section className=' bg-[#080808]'>
      <div className='bg-[#080808] h-[3rem] flex heade'><h1 className='head-txt ml-[8rem] px-[1rem] text-[2rem] text-black bg-white font-[Oswald]'>About</h1>
           </div>
         <div className='pl-[15rem] pr-[15rem] pt-[7rem] pb-[10rem] flex justify-center items-center outer'>
             

        <div className="txt-habout flex-1"><p className='text-[#fff]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur omnis numquam quia optio nisi vero vel laudantium sapiente veniam eligendi, qui dolor explicabo tenetur ipsa adipisci deleniti ut maxime!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quos enim ad eius architecto quasi dignissimos nulla voluptates. Odio aperiam explicabo dolorum quae nulla voluptates id eaque accusamus alias!</p>
        <p className='mt-[1.5rem] text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur omnis numquam quia optio nisi vero vel laudantium sapiente veniam eligendi, qui dolor explicabo tenetur ipsa adipisci deleniti ut maxime!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quos enim ad eius architecto quasi dignissimos nulla voluptates. Odio aperiam explicabo dolorum quae nulla voluptates id eaque accusamus alias!</p></div>
        <div className='relative right-habout'>
        <div id='a' className="img-habout flex-1"><img className='imgh ml-[7.5rem] h-[22.5rem] w-[22.5rem]' src={img} alt="" />
        <div className='imgh_border'/>
        </div>
       
        {/* <div className='imgh_border'/> */}

        </div>
    </div>
    </section>
   
  )
}

export default Habout