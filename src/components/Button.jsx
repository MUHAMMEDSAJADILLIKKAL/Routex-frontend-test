import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Button = (props) => {
  return (
    <button className={`bg-[#83CD20] rounded-full text-white flex items-center justify-center text-center gap-2 ${props.buttonStyle}`}>{props.title} <FaArrowRight className="text-white" />
 </button>
  )
}

export default Button