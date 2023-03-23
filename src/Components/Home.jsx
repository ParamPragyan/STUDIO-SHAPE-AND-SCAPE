import React from 'react'
import ChooseUs from './ChooseUs/ChooseUs'
import "./Home.css"
import Slider1 from './Slider-hero/Slider1'
import Slider2 from './Slider-second/Slider2'
import Stats from './Slider-second/Stats/Stats'

const Home = () => {
  return (
    <section className='one bg-black'>
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