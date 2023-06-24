import React from 'react'
import person from "../../../assets/person.svg"
import { NavLink, Link } from 'react-router-dom'

function Interior() {
  return (
    <section className='interior-main h-[100vh] flex justify-center items-center'>
      <div className="interior-container flex gap-[5rem]">
        <NavLink to="/person1"><div className="person1 w-[12rem] drop2 rounded-[50%]  bg-[#000000] duration-500 hover:scale-[1.2]">
          <img className='' src={person} alt="" />
          </div></NavLink>
        
          <div className="person2 w-[12rem] drop2 rounded-[50%] bg-[#000000] duration-500 hover:scale-[1.2]">
          <img className='' src={person} alt="" />
          </div>
          <div className="person3 w-[12rem] drop2 rounded-[50%] bg-[#000000] duration-500 hover:scale-[1.2]">
          <img className='' src={person} alt="" />
          </div>
      </div>

    </section>
  )
}

export default Interior