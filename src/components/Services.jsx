import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import Globe from '../assets/Globe.jpg'

const Services = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FFFDD0] relative flex">
        <div className="w-full h-full flex flex-col ">
          <div className="w-full h-[40%] z-50 flex items-end">
            <div className="flex w-full h-44 ">
              <div className="w-[80%] h-full  px-24 ">
                <div className="flex gap-2 items-center">
                  <p>OUR SERVICES</p>
                  <FaTelegramPlane className="text-green-800" />
                </div>
                <h1 className="text-5xl font-bold">
                  Adventure Unleashed <br /> Discover Your Next
                </h1>
              </div>
              <div className="w-[20%] h-full flex items-center justify-around">
                <div className="w-16 h-16 rounded-full border border-white  flex items-center justify-center">
                  <FaArrowLeft className="text-white" />
                </div>
                <div className="w-16 h-16 rounded-full border border-white  flex items-center justify-center">
                  <FaArrowRight className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[60%]  z-20 flex items-center justify-center gap-x-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="w-[500px] h-full bg-green-500 absolute right-0 rounded-l-2xl overflow-hidden"  style={{
          background: `url(${Globe}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
            <div className="w-full h-full bg-black bg-opacity-50"></div>
        </div> 
      </div>
    </>
  );
};

export default Services;
