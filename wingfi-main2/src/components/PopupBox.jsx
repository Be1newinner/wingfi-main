'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BiX } from 'react-icons/bi';
import { gsap } from 'gsap';
import bgpopup from '@/assets/popup-img/popupimage.jpg';

const PopupBox = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const popupRef = useRef(null); // Ref to track the popup box

  useEffect(() => {
    // Set a timeout to show the popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100); // 10 seconds

    // Clear the timeout if the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click happened outside of the popup box
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close the popup
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animate the popup using GSAP when it becomes visible
  useEffect(() => {
    if (showPopup && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.8 }, // Initial state (transparent and scaled down)
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, // End state (visible and normal size)
      );

      // Disable background scrolling by setting overflow to hidden
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling by resetting the overflow
      document.body.style.overflow = 'auto';
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div
          ref={popupRef} // Assign the ref to the popup box
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 lg:w-[50%] lg:h-[50%] flex items-center flex-col justify-center text-white text-3xl z-[999] rounded-lg"
          style={{
            backgroundImage: `url(${bgpopup.src})`, // Use bgpopup.src for the background
            backgroundSize: 'cover', // Adjust background size to cover the whole area
            backgroundPosition: 'center', // Center the background image
          }}
        >
          <h3>Here Huge Discount</h3>
          <h4 className="border-t-2 border-b-2 border-solid border-white py-2 text-sm font-bold my-4">
            UPTO 35% OFF
          </h4>

          <h3 className="text-2xl font-bold ">ON ALL ONLINE PRODUCTS</h3>
          <button className="bg-red-500 p-3 font-bold rounded-full text-lg uppercase mt-4">
            Start Shopping
          </button>
          <span
            className="absolute top-[-10px] right-[-10px] p-1 rounded-full cursor-pointer bg-red-500 flex items-center justify-center z-[999]"
            onClick={() => setShowPopup(false)}
          >
            <BiX color="white" />
          </span>
        </div>
      )}
    </>
  );
};

export default PopupBox;
