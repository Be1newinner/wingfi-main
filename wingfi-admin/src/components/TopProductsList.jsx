import React from 'react'
import product1 from "../assets/images/1.png"
import product2 from "../assets/images/2.png"
import product3 from "../assets/images/3.png"
import product4 from "../assets/images/4.png"
import product5 from "../assets/images/5.png"

export default function TopProductsList() {
  return (
    <div>
       {dataTopProductsList.map((d) => (
        <div className='flex justify-between my-1'>
            <div className='w-[50px] bg-gray-100 rounded-lg p-1 m-2'>
                <img src={d.image} alt="" />
            </div>
            <div className='w-[350px] font-bold'>
                <h1>{d.name}</h1>
                <p className='text-gray-400'>100 Items</p>
            </div>
            <div className='w-[200px] font-bold'>
                <p className='text-gray-400'>Coupon Code</p>
                <h1>Sflat</h1>
            </div>
            <div className='w-50px'>
               {/* <span> {flag} </span> */}
            </div>
            <div className='font-bold'>
                <h1>{d.percentage}</h1>
                <p className='text-gray-400'>{d.price}</p>
            </div>
        </div>
       ))}
    </div>
  )
}



const dataTopProductsList = [
    {
        id: 1,
        name: "Patimax Fragrance Long...",
        price: "27.00",
        percentage: "-15%",
        image: product1,
        // images: flag,
    },

    {
        id: 2,
        name: "Nulo MedalSeries Adult Cat...",
        price: "27.00",
        percentage: "-15%",
        image: product2,
        // flag: flag2
    },

    {
        id: 3,
        name: "Pedigree Puppy Dry Dog...",
        price: "27.00",
        percentage: "-15%",
        image: product3,
        // flag: flag3
    },

    {
        id: 4,
        name: "Biscoito Premier Cookie...",
        price: "27.00",
        percentage: "-15%",
        image: product4,
        // flag: flag4
    },

    {
        id: 5,
        name: "Pedigree Adult Dry Dog...",
        price: "27.00",
        percentage: "-15%",
        image: product5,
        // flag: flag5
    },
]