import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section className='one'>
    <div className='hero-img'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                 <span className='main-heading'>STUDIO <span className='main-span'>shape & scape</span></span>
            </h1>

            <p className='text-white'>The best Architecture firm in the town</p>

            <p className='text-lime-300	'>
                Book your Appointment <span className='special-word'>(+91) 12345-67890</span>
            </p>
        </div>
    </div>
    </section>
    )
}

export default Home