import React from 'react'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { FaArrowTrendUp } from 'react-icons/fa6'
import flag1 from "../assets/images/6.png"
import flag2 from "../assets/images/7.png"
import flag3 from "../assets/images/8.png"
import flag4 from "../assets/images/9.png"
import flag5 from "../assets/images/10.png"
import flag6 from "../assets/images/11.png"

export default function TopCountrySalesList() {
  return (
    <div>
       {dataTopCountrySalesList.map((d) => (
        <div className='flex justify-between items-center'>
            <div className='w-[50px] m-1'>
                <img src={d.image} alt="" />
            </div>
            <div className='w-[350px] font-bold'>
                <h1>{d.name}</h1>
            </div>
            <div className='w-[300px] text-xl font-bold'>
               {d.trend}
            </div>
            <div className='font-bold'>
                <p>6,972</p>
            </div>
        </div>
       ))}
    </div>
  )
}



const dataTopCountrySalesList = [
    {
        id: 1,
        image: flag1,
        name: "Turkish Flag",
        trend: <FaArrowTrendUp className='text-green-500' />
    },

    {
        id: 2,
        image: flag2,
       name: "Belgium",
       trend: <FaArrowTrendUp className='text-green-500' />
    },

    {
        id: 3,
        image: flag3,
       name : "Sweden",
       trend: <FaArrowTrendDown className='text-red-500' />
    },

    {
        id: 4,
        image: flag4,
       name : "Vietnamese",
       trend: <FaArrowTrendUp className='text-green-500'/>
    },

    {
        id: 5,
        image: flag5,
        name: "Australia",
        trend: <FaArrowTrendDown className='text-red-500' />
    },
    {
        id: 6,
        image: flag6,
        name: "Saudi Arabia",
        trend: <FaArrowTrendDown className='text-red-500' />
    },
]