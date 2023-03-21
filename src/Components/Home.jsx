import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section className='one'>
    <div className='hero-img '>
        <div className='hero-content'>
            <h1 className='heading-home flex justify-center items-center	'>
                 <span className='main-heading'>STUDIO <span className='main-span'>SHAPE & SCAPE</span></span>
            </h1>

            {/* <p className='text-white'>The best Architecture firm in the town</p> */}

            {/* <p className='text-lime-300	'>
                Book your Appointment Now at <span className='special-word'>(+91) 12345-67890</span>
            </p> */}
        </div>
    </div>
    </section>
    )
}

export default Home