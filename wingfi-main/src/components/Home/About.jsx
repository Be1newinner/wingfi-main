/** @format */

'use client';

import React from 'react';
import Image from 'next/image';
import abouttextimage1 from '@/assets/about-image/about-text-img-01.png';
import abouttextimage2 from '@/assets/about-image/about-text-img-02.png';

const fontSize = {
  fontSize: 'clamp(1.875rem, 1.6304rem + 1.3497vw, 2.25rem)',
  fontWeight: '800',
  textTransform: 'uppercase',
};

const About = () => {
  return (
    <div className="md:px-10 px-2 pt-10">
      <div>
        <button className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
          About the device
        </button>
      </div>
      <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-6 mt-6">
        <div>
          <p className="font-[800] leading-[1.7] uppercase " style={fontSize}>
            Our Most Recent Powerbank for the Future. Combining Stylish{' '}
            <span className="inline-block align-middle">
              <Image
                src={abouttextimage1}
                alt="Stylish Mobile Device"
                width={60}
                height={60}
              />
            </span>{' '}
            Best device. With The Trusted{' '}
            <span className="inline-block align-middle">
              <Image
                src={abouttextimage2}
                alt="Powerful Performance"
                width={60}
                height={60}
              />
            </span>{' '}
            Performance Possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
