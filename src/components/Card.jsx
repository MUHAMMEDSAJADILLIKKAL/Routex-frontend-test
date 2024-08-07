import React from 'react'
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";


const Card = () => {
  return (
    <div className="w-[25%] h-[90%] bg-white rounded-3xl flex flex-col items-center justify-center gap-6">
        <div className='w-28 h-28 bg-[#83CD20] rounded-full flex items-center justify-center'>
        <HiOutlineGlobeEuropeAfrica className='text-6xl text-white' />

        </div>
        <h2>Food and wine tours</h2>
        <p className='text-center text-wrap'> cLorem ipsum dolor sit amet, corrupti iure ducimus dolorem quidem nobis quisquam ratione cum. Vitae.</p>

    </div>
)
}

export default Card