import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Chat from "../assets/Chat.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [isShow, setIsShow] = useState(false)

  const toggleMobileMenu = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <header className="w-full h-20 bg-white flex ">
        <div className="w-[70%] md:w-[13%] bg-white flex items-center justify-center gap-2">
          <img src={Logo} className="w-12" alt="" srcset="" />
          <h1 className="font-semibold text-3xl text-[#034833]">RouteX</h1>
        </div>
        <div className="hidden w-[70%] h-full md:flex items-center justify-center gap-6 list-none text-[#034833] font-semibold">
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
        <div className=" hidden  w-[17%] h-full md:flex items-center gap-2 ">
          <div>
            <img src={Chat} className="w-12" alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-600">Need Help?</p>
            <p className="text-[#034833] font-bold">(307) 555-0133</p>
          </div>
        </div>
        <div className="h-full flex items-center justify-end">
        <IoReorderThreeOutline className="text-5xl" onClick={toggleMobileMenu} />
        </div>
      </header>
      {isShow && (
      <div className="w-full h-screen bg-black absolute top-0 bg-opacity-20 flex flex-col z-50">
        <div className="w-full h-[15%] bg-white flex items-center justify-end pr-6 ">
        <IoMdClose className="text-4xl"onClick={toggleMobileMenu} />
        </div>
        <div className="w-full h-[85%] flex flex-col items-center justify-center gap-4 list-none bg-white">
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
          <div className="flex flex-col pt-6 ">
            <p className="text-gray-600 text-center">Need Help?</p>
            <p className="text-[#034833] font-bold">(307) 555-0133</p>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;
