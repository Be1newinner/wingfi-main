import React, { useState, useRef } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const data = [
  {
    heading: 'Project Dashboard',
    task: 'New Task Assign',
    time: 4,
  },
  {
    heading: 'Admin Template',
    task: 'New Task Assign',
    time: 4,
  },
  {
    heading: 'Client Project',
    task: 'New Task Assign',
    time: 4,
  },
  {
    heading: 'Figma Design',
    task: 'New Task Assign',
    time: 4,
  },
];

const HomeAnalytics = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRefs = useRef([]);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleBlur = (e, index) => {
    // Check if the related target is outside of the menu
    if (!menuRefs.current[index].contains(e.relatedTarget)) {
      setOpenMenuIndex(null);
    }
  };

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
      {data.map((item, index) => (
        <div className="p-5 shadow-md" key={index}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-[20px] text-gray-700">{item.heading}</h3>
              <p className="text-gray-500">{item.task}</p>
            </div>

            <div
              className="cursor-pointer relative"
              onClick={() => toggleMenu(index)}
              tabIndex={0} // Make it focusable to trigger blur
              onBlur={(e) => handleBlur(e, index)}
              ref={(el) => (menuRefs.current[index] = el)}
            >
              <HiDotsHorizontal />
              {openMenuIndex === index && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border-solid border-1 border-rose-400 shadow-lg rounded-lg z-20">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold flex items-center gap-3">
                    <span>
                      <CiCirclePlus />
                    </span>
                    <span>Add</span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Copy</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-500">{item.time} Hrs ago</p>
            </div>

            <div className="relative w-[60px]">
              <Link className="absolute left-[20px]">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={40}
                  height={40}
                  className="rounded-full w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </Link>

              <Link>
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={40}
                  height={40}
                  className="rounded-full w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAnalytics;
