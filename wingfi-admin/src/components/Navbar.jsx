/** @format */

import React, { useState, useRef } from 'react';
import { messageData } from '../service/offline';
import { IoSearchSharp } from 'react-icons/io5';
import { FiBell } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Cookies from 'js-cookie';
import getToken from '../utils/getToken';

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [messages, setMessages] = useState(false);
  const [profile, setProfile] = useState(false);

  // Refs to track dropdown elements
  const notificationRef = useRef(null);
  const messagesRef = useRef(null);
  const profileRef = useRef(null);

  const handleLogout = () => {
    Cookies.remove('token');
    localStorage.removeItem('persist:root');
    // window.location.reload();
  };

  const token = getToken();

  return (
    <div>
      {token && (
        <nav className="flex justify-end px-4 py-3 relative border-b-2 border-b-solid ">
          <div className="flex gap-6 relative">
            <div
              className="relative flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => setProfile(!profile)}
              ref={profileRef}
            >
              <div
                onClick={() => setProfile(!profile)}
                className="hover:ring-4 ring-blue-700 rounded-full transition-all ease-in-out duration-300"
              >
                <img
                  src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="John Doe"
                  className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
                />
              </div>

              {profile && (
                <div className="absolute top-full right-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4 z-40 border border-gray-300">
                  <ul className="text-md">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      My Profile
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      My Contacts
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Account Settings
                    </li>
                    <li
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
