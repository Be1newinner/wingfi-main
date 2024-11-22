/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaCaretDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import logo from "../assets/logo/tges-logo.webp";
import {
  MdNotificationsNone,
  MdOutlineReviews,
  MdReviews,
} from "react-icons/md";
import {
  LayoutDashboard,
  Users,
  FileText,
  Contact,
  FileCode,
  Grip,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../redux/selectors/authSelectors";
import { authLogoutRequest } from "../redux/reducers/authReducer";
import { FcCustomerSupport } from "react-icons/fc";
import { AiOutlineCustomerService } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";

const navItems = [
  {
    text: "Dashboard",
    to: "/",
    icon: <LayoutDashboard size={20} />,
    alert: true,
    children: [],
  },
  {
    text: "Users",
    // to: '/users',
    icon: <Users size={20} />,
    alert: false,
    children: [
      { text: "Retailers", to: "/users/retailers" },
      { text: "Vendors", to: "/users/vendors" },
      { text: "Corporates", to: "/users/corporates" },
    ],
  },
  {
    text: "Products",
    // to: '/service',
    icon: <Grip size={20} />,
    alert: false,
    children: [
      { text: "Products", to: "/products/products" },
      { text: "Air", to: "/service/air" },
      { text: "Bus", to: "/service/bus" },
      { text: "Hotel", to: "/service/hotel" },
      { text: "Cab", to: "/service/cab" },
    ],
  },
  {
    text: "Orders",
    // to: '/ratecard',
    icon: <FileText size={20} />,
    alert: false,
    children: [{ text: "Get Cabs", to: "/ratecard/get-cab" }],
  },
  {
    text: "Statistics",
    // to: '/search-contact',
    icon: <Contact size={20} />,
    alert: false,
    children: [
      {
        text: "Add Contact",
        to: "/add-contact",
      },
      {
        text: "Get Contacts",
        to: "/get-contacts",
      },
      {
        text: "Contact Type",
        to: "/contact-type",
      },
    ],
  },
  {
    text: "Reviews",
    icon: <MdOutlineReviews size={20} />,
    alert: false,
    children: [],
  },
  {
    text: "Customers",
    icon: <AiOutlineCustomerService size={20} />,
    alert: false,
    children: [],
  },
  {
    text: "Transactions",
    icon: <GrTransaction size={20} />,
    alert: false,
    children: [],
  },

  {
    text: "Get Logs",
    to: "/getlogs",
    icon: <FileCode size={20} />,
    alert: false,
    children: [],
  },
];

function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null); // Track the index of the currently expanded menu
  // const dispatch = useDispatch();
  const profileRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed((prevState) => {
      // Reset expanded menu index when sidebar is collapsed
      if (!prevState) setExpandedMenuIndex(null);
      return !prevState;
    });
  };

  const { token, loading, error } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutRequest());

    // const isLogout = localStorage.removeItem('persist:root');
    // console.log(isLogout);
    // setShowProfileModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (index) => {
    if (!sidebarCollapsed) {
      setExpandedMenuIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the current menu
    }
  };

  return (
    <div className="flex h-screen  overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`shadow-lg bg-black  ${
          sidebarCollapsed ? "w-20" : "w-64"
        } transition-all duration-300`}
      >
        {/* <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!sidebarCollapsed && (
            // <img src={logo} alt="logo" className="w-full h-10 object-contain" />
            <h1 className="w-full  text-2xl font-extrabold object-contain text-white">WINGFI</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="h-10 w-10 p-2 flex items-center justify-center rounded-md bg-white hover:bg-gray-100"
          >
            {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div> */}

        <nav className="p-4 flex flex-col  font-semibold">
          {navItems.map((item, index) => (
            <div key={index} className="mb-2">
              {/* Parent link */}
              <Link
                to={item.to ? item.to : ""}
                onClick={(e) => {
                  if (item.children.length > 0) {
                    e.preventDefault(); // Prevent navigation
                    toggleMenu(index);
                  }
                }}
                className={`w-full flex items-center p-3 rounded-md hover:bg-gray-100 ${
                  location.pathname === item.to
                    ? "bg-violet-100 text-violet-600"
                    : "hover:text-black text-white"
                }`}
              >
                <div className="flex">
                  {item.icon}
                  {!sidebarCollapsed && (
                    <span className="ml-3 flex-1">{item.text}</span>
                  )}
                </div>
                {item.children.length > 0 && !sidebarCollapsed && (
                  <FaCaretDown
                    className={`ml-auto transition-transform ${
                      expandedMenuIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown links */}
              {expandedMenuIndex === index && item.children.length > 0 && (
                <div className="ml-8 mt-1">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.to}
                      className={`block p-2 rounded-md hover:bg-white ${
                        location.pathname === child.to
                          ? "bg-violet-100 text-violet-600"
                          : "hover:text-black text-white"
                      }`}
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex absolute bottom-0 w-[260px] left-0 items-center justify-between p-4 border-b border-gray-700">
          {!sidebarCollapsed && (
            // <img src={logo} alt="logo" className="w-full h-10 object-contain" />
            <h1 className="w-full  text-2xl font-extrabold object-contain text-white">
              WINGFI
            </h1>
          )}
          <button
            onClick={toggleSidebar}
            className="h-10 w-10 p-2 flex items-center justify-center rounded-md bg-white hover:bg-gray-100"
          >
            {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-black text-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-white hover:text-black">
                <MdNotificationsNone className="h-6 w-6 text-white hover:text-black" />
              </button>
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfileModal(!showProfileModal)}
                  className="flex items-center space-x-2"
                >
                  <FiUser className="h-8 w-8 text-white p-1 rounded-full border-2 border-violet-400" />
                </button>
                {showProfileModal && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 border border-gray-200">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100"
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-violet-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
