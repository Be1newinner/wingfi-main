"use client";

import { useState } from "react";

export default function Tabs({ tabs, data }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto pt-10 max-w-7xl px-5">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex bg-gray-50 p-2 gap-2">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-base transition-all duration-200 ${
                activeTab === idx
                  ? "text-white bg-[#ff888e] shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 0 ? (
            <div className="max-w-4xl">
              <div className="md:order-2 space-y-8">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug text-gray-900">
                  Power Your Life On-the-Go with the{" "}
                  <span className="text-[#ff5861]">
                    Wingfi India {data?.model} {data?.capacity} Mah
                  </span>{" "}
                  Power Bank
                </h1>

                {/* Introduction */}
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    Wingfi India
                  </span>
                  , a prominent name in power solutions for over 4 years, brings
                  you the{" "}
                  <span className="font-semibold text-gray-900">
                    {data?.model} {data?.capacity} Mah Power Bank
                  </span>
                  , a reliable and powerful companion for your daily charge
                  needs.
                </div>

                {/* Features List */}
                <ul className="space-y-6 text-gray-700 pl-0 md:pl-6">
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff5861]/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#ff5861]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-lg text-gray-900 mb-1">
                        Ample Capacity
                      </span>
                      <span className="leading-relaxed">
                        The {data?.capacity} mAh capacity ensures you can charge
                        your smartphone, tablet, or other compatible devices
                        multiple times on a single full charge.
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff5861]/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#ff5861]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-lg text-gray-900 mb-1">
                        Versatility
                      </span>
                      <span className="leading-relaxed">
                        Equipped with{" "}
                        <span className="font-medium">
                          {data?.inputPorts} ports
                        </span>
                        , the Power Bank caters to a wide range of devices,
                        allowing you to charge smartphones, tablets, cameras,
                        and more simultaneously.
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff5861]/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#ff5861]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-lg text-gray-900 mb-1">
                        Convenience
                      </span>
                      <span className="leading-relaxed">
                        The{" "}
                        <span className="font-medium">
                          included charging cable
                        </span>{" "}
                        eliminates the need to carry an extra one, while the{" "}
                        <span className="font-medium">
                          user manual and warranty card
                        </span>{" "}
                        provide clear instructions and peace of mind.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : activeTab === 1 ? (
            <div className="md:order-1">
              <div className="border rounded-md shadow-sm">
                <div className="bg-[#ff888e] text-white rounded-t-md px-6 py-4">
                  <h3 className="text-xl font-bold">General</h3>
                </div>

                <div className="p-6">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap w-1/3">
                          Ports Input
                        </td>
                        <td className="py-4 text-gray-600">
                          {data?.inputPorts}
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Ports Output
                        </td>
                        <td className="py-4 text-gray-600">
                          {data?.outputPorts}
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Model Name
                        </td>
                        <td className="py-4 text-gray-600">{data?.model}</td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Charging Cable Included
                        </td>
                        <td className="py-4 text-gray-600">Yes</td>
                      </tr>

                      <tr>
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Sales Package
                        </td>
                        <td className="py-4 text-gray-600">
                          <ul className="list-disc list-inside space-y-1">
                            <li>1 Power Bank</li>
                            <li>Charging Cable</li>
                            <li>User Manual</li>
                            <li>Warranty Card</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border rounded-md shadow-sm mt-8">
                <div className="bg-[#ff888e] text-white rounded-t-md px-6 py-4">
                  <h3 className="text-xl font-bold">Warranty</h3>
                </div>

                <div className="p-6">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap w-1/3">
                          Coverage
                        </td>
                        <td className="py-4 text-gray-600">
                          Manufacturing Defects
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Warranty Summary
                        </td>
                        <td className="py-4 text-gray-600">3 Months</td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Not Covered
                        </td>
                        <td className="py-4 text-gray-600">Physical Damage</td>
                      </tr>

                      <tr>
                        <td className="py-4 pr-8 font-medium text-gray-700 whitespace-nowrap">
                          Contact
                        </td>
                        <td className="py-4 text-gray-600">
                          <a
                            href="mailto:care@wingfiindia.com"
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            care@wingfiindia.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
