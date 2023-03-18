import React from 'react'

import "./ContactForm.css"
import BGI from "../assets/bg1.jpg"
import BGI2 from "../assets/shape & scape (1).gif"
const ContactForm = () => {
  return (
    <div className='section'>
        <div className='contact-content grid-container'>
            <div>
            
                

                <p>Lorem ipsum dolor sit amet, <span className='special-word'>consectetuer</span> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>

                <img src = {BGI2} className='bg-img' alt='get in touch'/>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <span className='special-word'>penatibus</span> et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <span className='special-word'>fringilla</span> vel, aliquet nec, vulputate eget, arcu. ILorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>

            <div>
                {/* <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1> */}

                <form className='form pt-10'>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm