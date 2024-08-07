import React from "react";
import AboutImage from "../assets/AboutImage.png";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="w-full h-screen bg-white-400 flex">
        <div className="w-[50%] h-full flex items-center justify-center">
          <img src={AboutImage} className="w-[80%]" alt="" srcset="" />
        </div>
        <div className="w-[50%] h-full flex items-center ">
          <div className="w-[80%] h-[85%] flex flex-col justify-center gap-y-2">
            <div className="flex gap-2 items-center">
              <p>ABOUT US</p>
              <FaTelegramPlane className="text-green-800" />
            </div>
            <h2 className="text-wrap text-3xl font-semibold">
              Unknown Wanderlust <br /> Your Journey into
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              soluta praesentium voluptatum fuga rerum, expedita, facilis
              Voluptas!
            </p>
            <div className="w-full h-32 flex ">
              <div className="w-[50%] h-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IoIosCheckbox className="text-[#83CD20]" />
                  <p>Safety Guides</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="w-[50%] h-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IoIosCheckbox className="text-[#83CD20]" />
                  <p>Safety Guides</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <Button title="Read More" buttonStyle="w-36 h-12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
