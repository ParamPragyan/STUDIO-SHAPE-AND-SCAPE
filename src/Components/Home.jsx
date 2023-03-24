import React from 'react'
import ChooseUs from './ChooseUs/ChooseUs'
import "./Home.css"
import Slider1 from './Slider-hero/Slider1'
import Slider2 from './Slider-second/Slider2'
import Stats from './Slider-second/Stats/Stats'
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
  return (
    <section className='one bg-black'>
        
    {/* <div className='absolute left-11 z-[10000] b-10'><a className='absolute left-11 z-50 b-10' href="https://wa.me/8328867593
" target="_blank" rel="noopener noreferrer"></a>
<BsWhatsapp  size={50} style=  {{color: "green"}} />
</div> */}
{/* <a href="https://wa.me/8328867593" className='z-50 absolute w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2 '><FaWhatsapp /></a> */}
    {/* <div className='hero-img '> */}
    <Slider1/>

        <div className='hero-content'>
       
       
            <h1 className='heading-home flex justify-center items-center	'>
                 <span className='main-heading'>STUDIO <span className='main-span'>SHAPE & SCAPE</span></span>
            </h1>

            {/* <p className='text-white'>The best Architecture firm in the town</p> */}

            {/* <p className='text-lime-300	'>
                Book your Appointment Now at <span className='special-word'>(+91) 12345-67890</span>
            </p> */}
        
    </div>
    <Stats/>
    <Slider2/>
    <ChooseUs/>
    </section>
    )
}

export default Home