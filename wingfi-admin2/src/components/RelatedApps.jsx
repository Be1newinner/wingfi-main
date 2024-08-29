import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiGooglesheets } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";



export default function RelatedApps() {
  return (
    <div className='flex flex-wrap justify-between my-1 '>
        {dataApps.map((d) => 
            <div className='w-24 h-24 text-center border-2 rounded-xl text-xl py-1 my-1 font-bold '>
                <div className='py-2 px-6'>
                <span className='text-4xl '>  {d.icons} </span>
                </div>
                <p className='text-base text-gray-400 hover:text-sky-500 cursor-pointer'>{d.name}</p>
            </div>
        )}
    </div>
  )
}


const dataApps = [
    {
        id: 1,
        icons: <SiAdobephotoshop className='bg-blue-500' />,
        name: 'Photoshop',
    },
    {
        id: 2,
        icons: <SiAdobeillustrator className='bg-orange-500'/>,
        name: 'illustrator',
    },
    {
        id: 3,
        icons: <SiGooglesheets className='text-green-500' />,
        name: 'Sheets',
    },
    {
        id: 4,
        icons: <BiLogoGmail className='text-red-500' />,
        name: 'Gmail',
    },
    {
        id: 5,
        icons: <FaFacebookMessenger className='text-sky-500' />,
        name: 'Messenger',
    },
    {
        id: 6,
        icons: <FaYoutube  className='text-red-400'/>,
        name: 'Youtube',
    },
    {
        id: 7,
        icons: <FaInstagram />,
        name: 'Flaticon',
    },
    {
        id: 8,
        icons: <FaInstagram />,
        name: 'Instagram',
    },
    {
        id: 9,
        icons: <FaFilePdf className='text-red-500' />,
        name: 'PDF',
    },
]