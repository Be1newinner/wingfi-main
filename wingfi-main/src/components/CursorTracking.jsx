'use client';

import React, { useRef, useEffect } from 'react';
import { initCursorAnimation } from '../gsapAnimation/gsapAnimations.js'; // Adjust the path as needed

const CursorTracker = () => {
  const cursor = useRef();

  useEffect(() => {
    initCursorAnimation(cursor); // Initialize cursor movement
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 -z-10 w-[80px] h-[80px] rounded-full bg-black bg-opacity-5  translate-y-[-50%] translate-x-[-50%] flex justify-center items-center"
    >
      <span className="text-white w-[10px] h-[10px] rounded-full bg-red-500"></span>
    </div>
  );
};

export default CursorTracker;
