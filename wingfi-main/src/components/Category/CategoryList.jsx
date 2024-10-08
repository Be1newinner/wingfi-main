import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaMobileAlt, FaChargingStation, FaHeadphones, FaHeadset, FaLaptop } from 'react-icons/fa';

const categories = [
  { name: 'Electronics', icon: <FaLaptop size={40} />, path: '/electronics' },
  { name: 'Mobile', icon: <FaMobileAlt size={40} />, path: '/mobile' },
  { name: 'Charger', icon: <FaChargingStation size={40} />, path: '/charger' },
  { name: 'Headphone', icon: <FaHeadphones size={40} />, path: '/headphone' },
  { name: 'Earphone', icon: <FaHeadset size={40} />, path: '/earphone' },
];

// Function to format category name for routing
const formatCategoryPath = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const CategoryList = () => {
  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <li key={category.name} className="w-full">
            <Link
              href={`/category/${formatCategoryPath(category.name)}`}
              className="flex flex-col items-center gap-4 px-4 py-12 bg-red-300 rounded hover:bg-red-400 transition duration-200"
            >
              <span className="text-xl ">{category.icon}</span>
              <span className="text-gray-800 font-semibold">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
