import React from "react";
import ChooseUs from "./ChooseUs/ChooseUs";
import "./Home.css";
// import Slider1 from "../Slider-hero/Slider1";
import Slider2 from "../Slider-second/Slider2";
import Stats from "../Slider-second/Stats/Stats";
import Habout from "../Home/Home-About/Habout";
// import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import landing_img from "../../assets/home-1.jpg"

const Home = () => {
  return (
    <section className="one home w-full pt-[8rem] text-[#fff] bg-black">
      <div className="flex justify-between pl-[7.5rem] pr-[8rem] items-center main_landing_bar">
        <div className="flex items-center left_part">
          <div className="mr-[1rem]">
            
            <img
              src={Logo}
              className="logo mt-[20px] min-h-[15.3rem] h-[15.3rem] min-w-[15.3rem] w-[15.3rem] "
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center  main_txt">
            <h1 className="p-0 m-0 head">
              <span className="top_txt  mb-0 pb-0">STUDIO</span>
              <br />
              <span className="bottom_txt mt-0 pt-0">SHAPE & SCAPE</span>
            </h1>
          </div>
        </div>
        <div className="right_part">
          <div className="left_txt">
            <span className="left_top" >-we provide</span>
            <ul className="left_top_ul pt-[1.2rem]">
              <li>Architecture.</li>
              <li>Design.</li>
              <li>Planning.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="landing_img mr-[8rem] pt-[6rem] pb-[5rem]">
        <img className="img mr-[5rem] w-[100rem] h-[45rem]" src={landing_img} alt="" />
      </div>



      {/* <Slider1/> */}

      {/* <div className="hero-content">
        <h1 className="heading-home flex justify-center items-center	">
          <span className="main-heading">
            STUDIO <span className="main-span">SHAPE & SCAPE</span>
          </span>
        </h1>
      </div> */}
      <Stats />
      <Habout />
      <Slider2 />
      <ChooseUs />
    </section>
  );
};

export default Home;
