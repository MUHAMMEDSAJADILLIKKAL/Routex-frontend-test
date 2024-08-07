import React from "react";
import HeroImage from "../assets/Hero.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-[600px] relative "
        style={{
          background: `url(${HeroImage}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 bg-black bg-opacity-50">
          <h1 className="text-white font-semibold text-6xl text-center">
            Journey with Confidence <br />
            <span className="text-[#83CD20]">Migrate</span> with Us
          </h1>
          <p className="w-[40%] text-white text-center text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut
            eaque, officia obcaecati temporibus doloAribus id sit ratione sunt
            quasi
          </p>
          <Button title="Learn More" buttonStyle="w-36 h-12" />
        </div>
      </div>
    </>
  );
};

export default Hero;
