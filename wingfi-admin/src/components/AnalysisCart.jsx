import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { LuPackage2 } from "react-icons/lu";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
// import { Line } from "react-chartjs-2";

export default function AnalysisCart() {
  return (
    <div className="flex flex-wrap">
      {dataAnalsisCart.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-wrap bg-white shadow-lg border-2 w-[48%] max-sm:w-full m-2 rounded-2xl p-4 justify-between items-center "
          >
            <div className="flex ">
              <div className="m-4 text-2xl">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p className="text-2xl font-bold">{item.sales}</p>
              </div>
            </div>
            <div className="flex items-center font-bold gap-2">
              <span>{item.trendIcon} </span>
              <p>{item.trend}</p>
            </div>
            {/* <Line
              data={{
                labels: revenueData.map((d) => d.label),
                datasets: [
                  {
                    label: "profit",
                    data: revenueData.map((d) => d.profit),
                  },
                  {
                    label: "revenue",
                    data: revenueData.map((d) => d.revenue),
                  },
                ],
              }}
            /> */}
          </div>
        );
      })}
    </div>
  );
}

const dataAnalsisCart = [
  {
    id: 1,
    icon: <LuPackage2 />,
    trend: "1.56%",
    trendIcon: <FaArrowTrendUp className="text-green-500" />,
    title: "Total Sales",
    sales: "34,945",
  },

  {
    id: 2,
    icon: <FaDollarSign />,
    trend: "1.56%",
    trendIcon: <FaArrowTrendDown className="text-red-500" />,
    title: "Total Income",
    sales: "34,945",
  },

  {
    id: 3,
    icon: <IoMdCopy />,
    trend: "0.00%",
    trendIcon: <FaArrowTrendUp className="text-gray-300" />,
    title: "Order Paid",
    sales: "34,945",
  },

  {
    id: 4,
    icon: <HiUsers />,
    trend: "1.56%",
    trendIcon: <FaArrowTrendUp className="text-green-500" />,
    title: "Total Visitor",
    sales: "34,945",
  },
];
