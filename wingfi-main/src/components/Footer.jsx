/** @format */

'use client';

import Link from 'next/link';
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [basicDetails, setBasicDetails] = useState(null);

  useEffect(() => {
    async function loadBasicDetails() {
      const data = await import('@/constants/BasicDetails.json');
      setBasicDetails(data.default);
    }
    loadBasicDetails();
  }, []);

  if (!basicDetails) return null;
  return (
    <footer className="p-4 md:p-10 bg-[#1f1f1f] text-base-content rounded-tr-3xl rounded-tl-3xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* 1st Column - Company Info */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <p className="w-full max-w-[200px] mx-auto text-white font-bold uppercase text-sm border-[1px] mb-4 border-white px-5 py-2 rounded-full text-center">
              Stay Connected
            </p>
            <span className="block font-bold text-2xl text-white text-center md:text-left mb-4">
              {basicDetails.company}
            </span>
            <p className="text-[#e4e1e1] text-center md:text-left mb-4">
              We help deliver quality securely. Let&apos;s Shop. We help deliver
              quality securely. Let&apos;s Shop. We help deliver.
            </p>
            <p className="text-[#e4e1e1] text-center md:text-left">
              Developed with love by{' '}
              <a href="https://shipsar.in" className="hover:text-error">
                Shipsar Developers
              </a>
            </p>
          </div>

          {/* 2nd Column - My Account */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-white text-center md:text-left">
              My Account
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2 mt-2">
              {[
                { href: '/shop', label: 'Shop' },
                { href: '/orders-info', label: 'Orders History' },
                { href: '/wishlist', label: 'Wish List' },
                { href: '/cart', label: 'Cart' },
                { href: '/checkout', label: 'Checkout' },
                {
                  href: '/register-your-product',
                  label: 'Register Your Product',
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="font-medium text-white hover:text-[#1877F2]"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Column - Information */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-white text-center md:text-left">
              Informations
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-2 mt-2">
              {[
                { href: '/contact', label: 'About Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-conditions', label: 'Terms & Conditions' },
                { href: '/return-policy', label: 'Return Policy' },
                { href: '/shipping-policy', label: 'Shipping Policy' },
              ].map((item) => (
                <li
                  key={item.href}
                  className="font-medium text-white hover:text-[#1877F2]"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column - Contact */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <h2 className="font-bold text-xl text-white mb-4">Talk to Us</h2>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <FaHeadphonesAlt
                  size={40}
                  color="#1877F2"
                  className="hidden md:block"
                />
                <div className="text-center md:text-left">
                  <p className="text-[#e4e1e1]">
                    Got Questions? Contact us 24/7
                  </p>
                  <p className="font-medium text-lg text-[#e4e1e1]">
                    <a href={`tel:+91${basicDetails.Phone}`}>
                      +91 {basicDetails.Phone}
                    </a>
                  </p>
                </div>
              </div>

              <p className="flex gap-2 items-center text-[#e4e1e1] text-center md:text-left">
                <MdOutlineMailOutline color="#1877F2" size={24} />
                {basicDetails.email}
              </p>

              <p className="flex gap-1 items-center text-[#e4e1e1] text-center md:text-left">
                <FiMapPin size={40} color="#1877F2" />
                {basicDetails.address}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white text-center md:text-left">
            Copyright © 2024 - All Rights Reserved by {basicDetails.company}
          </p>

          {/* Social Icons */}
          <div className="text-gray-200 flex gap-2 justify-center md:justify-end">
            {[
              {
                condition: basicDetails.support.facebook,
                href: basicDetails.support.facebook,
                icon: <FaFacebookF size={24} color="#1877F2" />,
              },
              {
                condition: basicDetails.support.linkedin,
                href: basicDetails.support.linkedin,
                icon: <FaLinkedinIn size={24} color="#1877F2" />,
              },
              {
                condition: basicDetails.support.twitter,
                href: basicDetails.support.twitter,
                icon: <FaTwitter size={24} color="#1877F2" />,
              },
              {
                condition: basicDetails.support.instagram,
                href: basicDetails.support.instagram,
                icon: <FaInstagram size={24} color="#1877F2" />,
              },
              {
                condition: basicDetails.support.whatsapp,
                href: basicDetails.support.whatsapp,
                icon: <FaWhatsapp size={24} color="#1877F2" />,
              },
            ].map(
              (social) =>
                social.condition && (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="bg-gray-700 p-2 rounded-lg duration-200 hover:bg-gray-200"
                  >
                    {social.icon}
                  </Link>
                ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
