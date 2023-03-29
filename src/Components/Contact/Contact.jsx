import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import "./Contact.css"
import bgi from "../../assets/heroimg.png"

const Contact = () => {
  return (
<section className='hero'>
<img className="bgimg" src= {bgi} alt = 'header img' />

        
        <ContactForm/>
    </section>  )
}

export default Contact