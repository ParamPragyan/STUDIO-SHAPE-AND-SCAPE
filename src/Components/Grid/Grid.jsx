import React from "react";
import "./Grid.css";

function Grid() {
  return (
    // <section className="bg-black ">
    <div className="p-10 pb-[10rem] pt-[10rem] bg-white-800 text-black-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-column-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8  ">
          {/* {grid.data.map((image) => {
            return (
              <div className=" box1 shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150 ">
                <img
                  src={image.path}
                  alt=""
                  className="w-full h-64 object-cover rounded "
                />
              </div>
            );
          })} */}
          {/* <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[1].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[0].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[2].path} alt="" srcset="" className="rounded" />
          </div> */}
          {/* <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[3].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[4].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[5].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[6].path} alt="" srcset="" className="rounded" />
          </div>
          <div className="shadow-xl shadow-gray-400 hover:-translate-y-6 duration-150">
            <img src={grid.data[7].path} alt="" srcset="" className="rounded" />
          </div> */}
        </div>
      </div>
    </div>
    // </section>
  );
}
export default Grid;
