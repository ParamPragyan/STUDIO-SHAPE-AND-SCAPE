import React from "react";
import "./ChooseUs.css"

export default function ChooseUs() {
  return (
    <section className="section p-20  bg-black text-[#888888]">
      <div className="main-container-2  flex  justify-center items-center">
        <div className="w-full">
          <img src="bg12.jpg" alt=""  className=" h-[25rem] object-cover relative"/>
        </div>


        <div className="flex flex-col main-content pl-20">
          <h1 className=" main-heading-2 pb-10 text-6xl ">Why Choose Us</h1>

          <div className="text-content ">
            <div className="  pb-4 flex justify-center items-center">
              <div className="pr-4">
                <h3 className="pb-4 text-2xl  font-bold">We create solution</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolorem accusantium hic harum obcaecati tempore!
                </p>
              </div>

              <div>
                <h3 className="pb-4 text-2xl font-bold">Carefully Planned</h3>
                <p className="pr-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate distinctio porro iusto delectus perspiciatis
                  similique.
                </p>
              </div>

            </div>
            <div className="pt-4 flex justify-center items-center">
              <div className="pr-4">
                <h3 className="pb-4 text-2xl font-bold">Perfect Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  eius blanditiis nesciunt odit excepturi veritatis.
                </p>
              </div>
              <div>
                <h3 className="pb-4 text-2xl font-bold">Well Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat eius sint ad facere, recusandae perspiciatis?
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}