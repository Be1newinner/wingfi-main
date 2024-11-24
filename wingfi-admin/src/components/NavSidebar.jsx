/** @format */

import { useLocation } from 'react-router-dom';
import { Sidebar, SidebarItem, SidebarDropdown } from './Sidebar';
import { LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import getToken from '../utils/getToken';

const navItems = [
  {
    text: 'Dashboard',
    to: '/',
    icon: <LayoutDashboard size={20} />,
    alert: true,
    children: [], // No nested items for this one
  },

  {
    text: 'Users',
    to: '/users',
    icon: <LayoutDashboard size={20} />,
    alert: false,
    children: [
      { text: 'Retailer', to: '/users/retailers' },
      { text: 'Vendor', to: '/users/vendors' },
      { text: 'Corporate', to: '/users/corporate' },
    ],
  },

  {
    text: 'Services',
    to: '/service',
    icon: <LayoutDashboard size={20} />,
    alert: false,
    children: [
      { text: 'Train', to: '/service/train' },
      { text: 'Air', to: '/service/air' },
      { text: 'Bus', to: '/service/bus' },
      { text: 'Hotel', to: '/service/hotel' },
      { text: 'Cab', to: '/service/cab' },
    ],
  },
  {
    text: 'Rate Card',
    to: 'dashboard/ratecard',
    icon: <LayoutDashboard size={20} />,
    alert: false,
    children: [{ text: 'Get Cabs', to: '/ratecard/get-cab' }],
  },

  {
    text: 'Get Logs',
    to: '/getlogs',
    icon: <LayoutDashboard size={20} />,
    alert: false,
    children: [],
  },

  {
    text: 'search Contact',
    to: '/search-contact',
    icon: <LayoutDashboard size={20} />,
    alert: false,
    children: [],
  },
];

export default function NavSidebar() {
  // const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const handleSidebarToggle = () => {
    // Close all dropdowns when sidebar is collapsed
    setActiveDropdown(null);
  };

  const token = getToken();
  return (
    <div>
      {token && (
        <Sidebar onToggle={handleSidebarToggle}>
          {navItems.map((item, index) =>
            item.children && item.children.length > 0 ? (
              <SidebarDropdown
                key={item.text}
                icon={item.icon}
                text={item.text}
                active={location.pathname.includes(item.to)}
                isOpen={activeDropdown === index}
                onClick={() => handleDropdownClick(index)}
              >
                {item.children.map((child) => (
                  <SidebarItem
                    key={child.text}
                    text={child.text}
                    to={child.to}
                    active={location.pathname === child.to}
                  />
                ))}
              </SidebarDropdown>
            ) : (
              <SidebarItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                to={item.to}
                active={location.pathname === item.to}
                alert={item.alert}
              />
            ),
          )}
        </Sidebar>
      )}
    </div>
  );
}
