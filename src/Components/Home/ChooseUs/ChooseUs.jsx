import React from "react";
import "./ChooseUs.css";
import Fade from "react-reveal/Fade";

export default function ChooseUs() {
  return (
    <section className="section h-auto bg-black text-gray-100">
      <h1 className=" tag text-5xl pl-[18rem] pb-[2.5rem]">Why choose us</h1>

      <div className="flex gap-4">
        <div className="flex flex-col  p-4 gap-4 w-1/2 overflow-x-hidden ">
          <Fade left>
            <div className="border-white rounded-2xl box ">
              <h1 className="p-4 text-4xl">Why choose you</h1>
              <hr className="border-[2px]" />
              <p className="p-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a, earum
                necessitatibus molestias suscipit voluptatum.
              </p>
            </div>
            <div className="border-gray-900 rounded-2xl box">
              <h1 className="text-4xl p-4">Why choose you</h1>
              <hr className="border-[2px]" />
              <p className="p-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a, earum
                necessitatibus molestias suscipit voluptatum.
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col  p-4 w-1/2 gap-4 ">
          <Fade right>
            <div className="border-gray-900 rounded-2xl  box">
              <h1 className="p-4 text-4xl">Why choose you</h1>
              <hr className="border-[2px]" />
              <p className="p-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a, earum
                necessitatibus molestias suscipit voluptatum.
              </p>
            </div>
            <div className="border-gray-700 rounded-2xl box">
              <h1 className="p-4 text-4xl">Why choose you</h1>
              <hr className="border-[2px]" />
              <p className="p-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                provident ex? Ducimus itaque placeat sunt distinctio, adipisci
                tempore tempora numquam obcaecati laudantium vero. Quod a, earum
                necessitatibus molestias suscipit voluptatum.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
