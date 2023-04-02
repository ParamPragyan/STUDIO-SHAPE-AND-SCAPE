import React from "react";

import "./ContactForm.css";
import Fade from "react-reveal/Fade";
// import BGI from "../../../assets/bg1.jpg"
// import BGI2 from "../../../assets/shape & scape (1).gif"
const ContactForm = () => {
  return (
    <div className="section">
      <div className="contact-content grid-container">
        <div>
          <Fade left>
            <p>
              Lorem ipsum dolor sit amet,{" "}
              <span className="special-word">consectetuer</span> adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient.
            </p>

            {/* <img src = {BGI2} className='bg-img' alt='get in touch'/> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.339269420912!2d83.9915256!3d21.4944271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a21170383741b6f%3A0x79270ff98203a1bf!2sStudio%20Shape%20and%20Scape!5e0!3m2!1sen!2sin!4v1679562989526!5m2!1sen!2sin"
              referrerpolicy="no-referrer-when-downgrade"
              aria-level={"Google Maps"}
              className="bg-img w-full"
            ></iframe>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque{" "}
              <span className="special-word">penatibus</span> et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </Fade>
        </div>

        <div>
          {/* <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1> */}
          <Fade right>
            <form className="form pt-[4rem]">
              <div className="form-field name-email">
                <div>
                  <label>Name</label>
                  <input type="text" name="name" />
                </div>

                <div>
                  <label>Email</label>
                  <input type="email" name="email" />
                </div>
              </div>

              <div className="form-field">
                <div>
                  <label>Subject</label>
                  <input type="text" name="subject" />
                </div>
              </div>

              <div className="form-field">
                <div>
                  <label>Message</label>
                  <textarea type="text" name="message" />
                </div>
              </div>
            </form>

            <button className="btn">Send Request</button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
