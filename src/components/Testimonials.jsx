import { useState } from "react";
import { testimonialsData } from "../helper/testimonialsData";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <div className="testimonials flex flex-col md:flex-row gap-4 px-4">
      <div className="left w-full md:w-1/2">
        <div className="programs-header flex flex-col gap-4 justify-center uppercase italic font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white">
          <span className="text-[var(--orange)] text-2xl">Testimonials</span>
          <span className="stroke">What people</span>
          <span>say about us</span>
        </div>
        <span className="text-white text-justify leading-10 tracking-[2px]">
          {testimonialsData[selected].review}
        </span>
        <div className="flex gap-2">
          <span className="text-[var(--orange)]">
            {testimonialsData[selected].name}
          </span>
          <span className="text-white">-</span>
          <span className="text-white">
            {testimonialsData[selected].status}
          </span>
        </div>
      </div>
      <div className="right w-full md:w-1/2">
        <div></div>
        <div></div>
        <img
          className="w-68 h-80 object-cover m-auto"
          src={testimonialsData[selected].image}
          alt="customer"
        />
        <div className="arrows flex gap-4 pt-4 justify-center md:justify-normal">
          <AiOutlineArrowLeft
            className="bg-white text-gray-600 rounded-full text-4xl p-1 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <AiOutlineArrowRight
            className="bg-white text-gray-600 rounded-full text-4xl p-1 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => {
              selected === testimonialLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
