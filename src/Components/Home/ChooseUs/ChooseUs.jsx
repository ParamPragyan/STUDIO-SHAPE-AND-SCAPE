import React from "react";
import "./ChooseUs.css";
import Fade from "react-reveal/Fade";

export default function ChooseUs() {
  return (
    <section className="section h-auto bg-black  text-gray-100">
      <div className="pb-[4rem]"><h1 className="flex  justify-center tag text-[3.5rem] font-[500] ">WHY CHOOSE US</h1></div>

      <div className="flex justify-center gap-0">
        <div className="flex flex-col  p-5 gap-10  w-[24rem]  ">
          <Fade left>
            <div className="border-white rounded-2xl box flex justify-center flex-col items-center ">
              <h1 className=" p-4 pt-[2rem] text-2xl">Why choose you</h1>
              <hr className="border-[3px] rounded-[50%]" />
              <p className="para p-[2.5rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a,
                
              </p>
            </div>
            <div className="border-white rounded-2xl flex justify-center flex-col items-center box">
              <h1 className="p-4 pt-[2rem] text-2xl ">Why choose you</h1>
              <hr className="border-[3px] rounded-[50%]" />
              <p className="para p-[2.5rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col  p-5 gap-10 w-[24rem] ">
          <Fade right>
            <div className="border-white rounded-2xl flex justify-center flex-col items-center  box">
              <h1 className="p-4 pt-[2rem] text-2xl">Why choose you</h1>
              <hr className="border-[3px] rounded-[50%]" />
              <p className="para p-[2.5rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a
              </p>
            </div>
            <div className="border-white rounded-2xl flex justify-center flex-col items-center box">
              <h1 className="p-4 pt-[2rem] text-2xl">Why choose you</h1>
              <hr className="border-[3px] rounded-[50%]" />
              <p className="para p-[2.5rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
