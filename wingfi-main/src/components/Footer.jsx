"use client";

import Link from "next/link";
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [basicDetails, setBasicDetails] = useState(null);

  useEffect(() => {
    async function loadBasicDetails() {
      const data = await import("@/constants/BasicDetails.json");
      setBasicDetails(data.default);
    }
    loadBasicDetails();
  }, []);

  if (!basicDetails) return null;
  return (
    <footer className="p-10 bg-[#1f1f1f] text-base-content rounded-tr-3xl rounded-tl-3xl flex flex-col">
      <div
        className="pt-5 pb-14 flex w-full justify-between md:flex-wrap  sm:flex-row"
      >
        {/* 1st Column */}
        <div className="flex flex-col gap-2 max-w-72">
          <p className="w-[200px] text-white font-bold uppercase text-sm border-[1px] mb-4 border-white px-5 py-2 rounded-full text-center">
            Stay Connected
          </p>
          <span className="font-bold text-2xl text-white">{basicDetails.company}</span>
          <p className="text-[#e4e1e1]">
            We help deliver quality securely. Let&apos;s Shop. We help deliver
            quality securely. Let&apos;s Shop. We help deliver.
          </p>

          <p className="text-[#e4e1e1]">
            Developed with love by{" "}
            <a href="https://shipsar.in" className="hover:text-error">
              Shipsar Developers
            </a>
          </p>
        </div>

        {/* 2nd Column */}
        <div>
          <h3 className="text-lg font-bold text-white">My Account</h3>
          <ul
            className="flex flex-col gap-2 mt-2 pl-4 sm:pl-0"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="font-medium text-white hover:text-[#1877F2]  ">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2] ">
              <Link href="/orders-info">Orders History</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2] ">
              <Link href="/wishlist">Wish List</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2] ">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2] ">
              <Link href="/checkout">Checkout</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2] ">
              <Link href="/register-your-product">Register Your Product</Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div>
          <h3 className="text-lg font-bold text-white">Informations</h3>
          <ul
            className="flex flex-col gap-2 mt-2 pl-4 sm:pl-0"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="font-medium text-white hover:text-[#1877F2]">
              <Link href="/contact">About Us</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2]">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2]">
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2]">
              <Link href="/return-policy">Return Policy</Link>
            </li>
            <li className="font-medium text-white hover:text-[#1877F2]">
              <Link href="/shipping-policy">Shipping Policy</Link>
            </li>
          </ul>
        </div>

        {/* 4th Column */}
        <div className="flex flex-col gap-2 max-w-72">
          <h2 className="font-bold text-xl text-white">Talk to Us</h2>
          <div className="flex gap-3">
            <FaHeadphonesAlt size={40} color="#1877F2" className="hidden sm:block" />
            <div>
              <p className="text-[#e4e1e1]">Got Questions? Contact us 24/7</p>
              <p className="font-medium text-lg text-[#e4e1e1]">
                <a href={`tel:+91${basicDetails.Phone}`}>
                  +91 {basicDetails.Phone}
                </a>
              </p>
            </div>
          </div>

          <p className="flex gap-2 items-center text-[#e4e1e1]">
            <MdOutlineMailOutline color="#1877F2" size={24} />
            {basicDetails.email}
          </p>

          <p className="flex gap-1 items-center text-[#e4e1e1]">
            <FiMapPin size={40} color="#1877F2" />
            {basicDetails.address}
          </p>
        </div>
      </div>
      <aside className="border-t border-gray-400 pt-10 flex justify-between items-center">
        <p className="text-white ">
          Copyright © 2024 - All Rights Reserved by {basicDetails.company}
        </p>
        {/* Social Icons */}
        <div className="text-gray-200 flex gap-2">
          {basicDetails.support.facebook && (
            <Link
              href={basicDetails.support.facebook}
              className="bg-gray-700 p-2  rounded-lg duration-200 hover:bg-gray-200"
            >
              <FaFacebookF size={24} color="#1877F2" />
            </Link>
          )}
          {basicDetails.support.linkedin && (
            <Link
              href={basicDetails.support.linkedin}
              className="bg-gray-700 p-2  rounded-lg duration-200 hover:bg-gray-200"
            >
              <FaLinkedinIn size={24} color="#1877F2" />
            </Link>
          )}
          {basicDetails.support.twitter && (
            <Link
              href={basicDetails.support.twitter}
              className="bg-gray-700 p-2  rounded-lg duration-200 hover:bg-gray-200"
            >
              <FaTwitter size={24} color="#1877F2" />
            </Link>
          )}
          {basicDetails.support.instagram && (
            <Link
              href={basicDetails.support.instagram}
              className="bg-gray-700 p-2  rounded-lg duration-200 hover:bg-gray-200"
            >
              <FaInstagram size={24} color="#1877F2" />
            </Link>
          )}
          {basicDetails.support.whatsapp && (
            <Link
              href={basicDetails.support.whatsapp}
              className="bg-gray-700 p-2  rounded-lg duration-200 hover:bg-gray-200"
            >
              <FaWhatsapp size={24} color="#1877F2" />
            </Link>
          )}
        </div>
      </aside>
    </footer>
  );
}
