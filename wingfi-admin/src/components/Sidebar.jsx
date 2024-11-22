import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useContext, createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo/tges-logo.webp';

const SidebarContext = createContext();

export const Sidebar = ({ children, onToggle }) => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((curr) => {
      const newExpanded = !curr;
      onToggle(); // Trigger the callback to handle dropdown state
      return newExpanded;
    });
  };

  return (
    <aside
      className={`h-screen transition-all top-0 left-0 z-10 overflow-y-auto ${
        expanded ? 'w-64' : 'w-16'
      } bg-white`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? 'w-20' : 'w-0'}`}
            alt="Logo"
          />
          <button onClick={handleToggle} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export const SidebarItem = ({ icon, text, to, active, alert }) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <li>
      <Link
        to={to}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          active
            ? 'bg-indigo-100 text-indigo-800' // Apply indigo bg when active
            : 'hover:bg-indigo-50 text-indigo-600' // Default hover state
        }`}
      >
        {icon}
        {expanded && <span className="ml-3">{text}</span>}
        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`}></div>}
      </Link>
    </li>
  );
};

export const SidebarDropdown = ({ icon, text, children, active, isOpen, onClick }) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <>
      <li onClick={onClick} className="cursor-pointer">
        <div
          className={`flex items-center py-2 px-3 ${
            active ? 'bg-indigo-100' : '' // Indigo bg for active dropdown
          }`}
        >
          {icon}
          {expanded && <span className="ml-3">{text}</span>}
          {expanded &&
            (isOpen ? <ChevronUp className="ml-auto" /> : <ChevronDown className="ml-auto" />)}
        </div>
      </li>
      {isOpen && <ul className="pl-6">{children}</ul>}
    </>
  );
};
