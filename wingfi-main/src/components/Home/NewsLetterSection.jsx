/** @format */
'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function NewsLetterSection() {
  const pathname = usePathname();
  return (
    <div
      className={`h-full px-5 py-10 lg:px-[50px] lg:py-[50px] mx-5 lg:mx-10 rounded-[50px] border border-[#e4e1e1] ${
        pathname == '/checkout' ? 'bg-[#ffffff]' : 'bg-[#ebfafe]'
      }`}
    >
      <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5">
          <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
            Stay Wired In
          </p>
          <p className="text-3xl lg:text-5xl  font-semibold text-center lg:text-left">
            Get our most recent updates straight to your inbox.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-5">
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full p-4 border rounded-l-full text-base border-none focus:outline-none focus:border-none focus:ring-0"
            />
            <button className="w-1/3 uppercase lg:text-[15px] text-[10px] lg:p-4 p-2 font-bold text-white text-xl bg-[#4e7fff] rounded-r-full">
              Submit
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-base text-[#707171]">
            <input
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
              className="w-4 h-4"
            />
            <label htmlFor="termsAndConditions">
              I agree with the terms & conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
