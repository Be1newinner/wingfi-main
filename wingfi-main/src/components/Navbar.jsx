/** @format */

import React from 'react';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
// import Image from 'next/image';
// import logo from '../public/logo.svg';

const Navbar = () => {
  return (
    <header className="w-full top-0 left-0 py-5 px-10 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center border rounded-full py-3 px-6">
          <p className="text-3xl font-extrabold">WINGFI</p>
        </div>

        <div>
          <ul className="flex gap-3 items-center border rounded-full py-3 px-6">
            <li>
              <Link
                href={'/'}
                className="hover:bg-red-500 hover:text-white py-2 px-3 rounded-full"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href={'/shop'}
                className="hover:bg-red-500 hover:text-white py-2 px-3 rounded-full"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                href={'/account'}
                className="hover:bg-red-500 hover:text-white py-2 px-3 rounded-full"
              >
                Account
              </Link>
            </li>

            {/* <li>
              <Link
                href={'/contact'}
                className="hover:bg-red-500 hover:text-white py-2 px-3 rounded-full"
              >
                About Us
              </Link>
            </li> */}

            <li>
              <Link
                href={'/contact'}
                className="hover:bg-red-500 hover:text-white py-2 px-3 rounded-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-3 ">
          <div className="relative border p-3 rounded-full hover:bg-red-500 hover:text-white font-bold">
            <CiHeart size={20} />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs w-[15px] h-[15px] p-1 text-center items-center flex justify-center text-white">
              0
            </span>
          </div>
          <Link href={'/cart'}>
            <div className="flex items-center gap-2 border rounded-full p-1 cursor-pointer ">
              <div className="border p-2 rounded-full ">
                <BsCart3 />
              </div>
              <div className="cursor-pointer">$00.00</div>
            </div>
          </Link>
          <div className="border p-3 rounded-full">
            <FaRegUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
