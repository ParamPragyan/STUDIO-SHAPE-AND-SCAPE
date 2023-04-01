import React from 'react'
import "./Habout.css"
import Fade from "react-reveal/Fade";

import img from "../../../assets/img-habout.jpg"

const Habout = () => {
  return ( 
    <section className='pt-[5rem]'>
           <h1 className='heading'>About</h1>
         <div className='pl-[15rem] pr-[15rem] pt-[5rem] pb-[10rem] flex justify-center items-center outer'>
             

        <div className="txt-habout flex-1"><Fade left><p className='text-[#fff]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur omnis numquam quia optio nisi vero vel laudantium sapiente veniam eligendi, qui dolor explicabo tenetur ipsa adipisci deleniti ut maxime!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quos enim ad eius architecto quasi dignissimos nulla voluptates. Odio aperiam explicabo dolorum quae nulla voluptates id eaque accusamus alias!</p></Fade>
        <Fade left><p className='mt-[1.5rem] text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur omnis numquam quia optio nisi vero vel laudantium sapiente veniam eligendi, qui dolor explicabo tenetur ipsa adipisci deleniti ut maxime!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quos enim ad eius architecto quasi dignissimos nulla voluptates. Odio aperiam explicabo dolorum quae nulla voluptates id eaque accusamus alias!</p></Fade></div>
        <div id='a' className="img-habout flex-1"><Fade right><img className='imgh ml-[7.5rem] h-[360px] w-[360px]' src={img} alt="" /><div className='imgh_border'/></Fade></div>
        {/* <div className='imgh_border'/> */}
    </div>
    </section>
   
  )
}

export default Habout