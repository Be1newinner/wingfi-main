"use client";

import { useState } from "react";

export default function Tabs({ tabs, data }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto pt-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex bg-gray-50 p-2 gap-2">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === idx
                  ? "bg-white text-[#ff5861] shadow-sm"
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
            <div>
              <div className="md:order-2">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight md:leading-snug">
                  Power Your Life On-the-Go with the Wingfi India {data?.model}{" "}
                  {data?.capacity}
                  Mah Power Bank
                </h1>

                <p className="mt-4 md:mt-8 text-lg md:text-xl">
                  <b>Wingfi India</b>, a prominent name in power solutions for
                  over 4 years, brings you the{" "}
                  <b>
                    {" "}
                    {data?.model} {data?.capacity}Mah Power Bank
                  </b>
                  , a reliable and powerful companion for your daily charge
                  needs.
                </p>

                <ul className="mt-8 md:mt-12 list-disc list-inside md:list-outside">
                  <li>
                    <b>Ample Capacity:</b> The {data?.capacity}
                    mAh capacity ensures you can charge your smartphone, tablet,
                    or other compatible devices multiple times on a single full
                    charge.
                  </li>
                  <li>
                    <b>Versatility:</b> Equipped with{" "}
                    <b>{data?.inputPorts} ports</b>, the Power Bank caters to a
                    wide range of devices, allowing you to charge smartphones,
                    tablets, cameras, and more simultaneously.
                  </li>
                  <li>
                    <b>Convenience:</b> The <b>included charging cable </b>
                    eliminates the need to carry an extra one, while the{" "}
                    <b>user manual and warranty card</b> provide clear
                    instructions and peace of mind.
                  </li>
                </ul>
              </div>
            </div>
          ) : activeTab === 1 ? (
            <div className="md:order-1">
              <div className="border rounded-md">
                <div className="bg-[#ff5861] text-white rounded-t-md font-semibold p-4">
                  General
                </div>
                <div className="px-4 pb-4">
                  <table className="mt-4 w-full">
                    <tbody>
                      <tr>
                        <td className="font-medium">Ports Input</td>
                        <td>{data?.inputPorts}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Ports Output</td>
                        <td>{data?.outputPorts}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Model Name</td>
                        <td>{data?.model}</td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            textWrap: "nowrap",
                          }}
                          className="font-medium"
                        >
                          Charging Cable Included
                        </td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Sales Package</td>
                        <td>
                          1 Power Bank, Charging Cable, <br /> User Manual,
                          Warranty Card
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border rounded-md mt-8">
                <div className="bg-[#ff5861] text-white rounded-t-md font-semibold p-4">
                  Warranty
                </div>
                <div className="px-4 pb-4">
                  <table className="mt-4 w-full">
                    <tbody>
                      <tr>
                        <td className="font-medium">Coverage</td>
                        <td>Manufacturing Defects</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Warranty Summary</td>
                        <td>3 Months</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Not Covered</td>
                        <td>Physical Damage</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Contact</td>
                        <td>care@wingfiindia.com</td>
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
