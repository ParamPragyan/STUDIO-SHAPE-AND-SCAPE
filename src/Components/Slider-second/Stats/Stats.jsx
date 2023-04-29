import React from "react";
import { useState } from "react";
import "./Stats.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn]=useState(false);
  return (
    <>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <section className="stats flex justify-around items-center p-20 bg-black text-white">
     
        <div className=" flex flex-col items-center total-projects">
          <h1>
           {counterOn && <CountUp start={0} end={99} duration={5} delay={0} />}+
          </h1>
          <p>Total Projects</p>
        </div>
        <div className="flex flex-col items-center ongoing-projects">
          <h1>
          {counterOn && <CountUp start={0} end={99} duration={5} delay={0} />}+
          </h1>
          <p>Ongoing Projects</p>
        </div>
        <div className="flex flex-col items-center completed-projects">
          <h1>
          {counterOn && <CountUp start={0} end={99} duration={5} delay={0} />}+
          </h1>
          <p>Completed Projects</p>
        </div>
        
      </section>
      </ScrollTrigger>
      {/* <div className="bg-black">
    <div className=' w-5/12 m-auto h-px bg-gray-600'></div>
    </div> */}
    </>
  );
};

export default Stats;
