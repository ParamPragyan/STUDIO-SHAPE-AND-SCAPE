import React, { useState } from "react";
import "./Slider1.css";
import img1 from "../../assets/home-1.jpg";
import img2 from "../../assets/home-2.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider1() {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="px-[10rem] ]">
      <div
        // style={{ backgroundImage: `url('${slides[0].url}')` }}
        className=" h-full w-full duration-500 "
      > 
        <img className="rounded-b-[30%]"
          src={slides[currentIndex].img}
          alt=""
        />
      </div>
      <div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={70}
          className="absolute top-[80%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
        />
      </div>
      <div>
        <BsChevronCompactRight
          onClick={nextSlide}
          className=" absolute top-[80%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
          size={70}
        />
      </div>
    </div>
  );
}

export default Slider1;
