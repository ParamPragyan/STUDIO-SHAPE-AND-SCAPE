import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <>
      <section className="flex justify-around items-center pt-[7rem] p-20 bg-black text-white stats">
      <div className=" flex flex-col items-center total-projects">
        <h1>99+</h1>
        <p>Total Projects</p>
      </div>
      <div className="flex flex-col items-center ongoing-projects">
        <h1>99+</h1>
        <p>Ongoing Projects</p>
      </div>
      <div className="flex flex-col items-center completed-projects">
        <h1>99+</h1>
        <p>Completed Projects</p>
      </div>

    </section>
    {/* <div className="bg-black">
    <div className=' w-5/12 m-auto h-px bg-gray-600'></div>
    </div> */}
   

    </>
  
  );
};

export default Stats;
