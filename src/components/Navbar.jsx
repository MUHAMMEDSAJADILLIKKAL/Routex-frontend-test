import React from "react";
import Logo from "../assets/Logo.png";
import Chat from "../assets/Chat.png";
import Hero from "../assets/Hero.jpg";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 bg-white flex ">
        <div className="w-[13%] bg-white flex items-center justify-center gap-2">
          <img src={Logo} className="w-12" alt="" srcset="" />
          <h1 className="font-semibold text-3xl text-[#034833]">RouteX</h1>
        </div>
        <div className="w-[70%] h-full flex items-center justify-center gap-6 list-none text-[#034833] font-semibold">
          <li>
            <select name="home" id="home">
              <option value="HOME">HOME</option>
            </select>
          </li>
          <li>ABOUT US</li>
          <li>
            <select name="home" id="home">
              <option value="HOME">STORY</option>
            </select>
          </li>
          <li>
            <select name="home" id="home">
              <option value="HOME">VISA</option>
            </select>
          </li>
          <li>
            <select name="home" id="home">
              <option value="HOME">BLOG</option>
            </select>
          </li>
          <li>
            <select name="home" id="home">
              <option value="HOME">PAGE</option>
            </select>
          </li>
          <li>CONTACT</li>
        </div>
        <div className="w-[17%] h-full flex items-center gap-2 ">
          <div>
            <img src={Chat} className="w-12" alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-600">Need Help?</p>
            <p className="text-[#034833] font-bold">(307) 555-0133</p>
          </div>
        </div>
      </header>
      <div
        className="w-full h-[600px] flex flex-col items-center justify-center gap-8"
        style={{
          background: `url(${Hero}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-semibold text-6xl text-center">Journey with Confidence <br /> <span className="text-[#83CD20]">Migrate</span>  with Us</h1>
        <p className="w-[40%] text-white text-center text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut eaque, officia obcaecati temporibus doloribus id sit ratione sunt quasi</p>
        <Button title="Learn More"buttonStyle="w-36 h-12" />
      </div>
    </>
  );
};

export default Navbar;
