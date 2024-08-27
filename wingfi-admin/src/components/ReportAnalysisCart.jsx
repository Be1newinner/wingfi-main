import React from 'react'
import { Bar } from 'react-chartjs-2'
import { FaDollarSign } from 'react-icons/fa'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import { IoMdCopy } from 'react-icons/io'
import { LuPackage2 } from 'react-icons/lu'
import analysisData from "../services/analysisData.json";

export default function ReportAnalysisCart() {
  return (
    <div className="flex flex-wrap">
      {dataReportAnalysis.map((item, index) => {
        return (
          <div
            key={index}
            className=" bg-white shadow-lg border-2 w-[30%] max-sm:w-full m-5 rounded-2xl p-4 justify-between items-center "
          >
            <div className='flex justify-between'>
            <div className="flex">
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
            </div>
            <Bar key={index} data={{
                labels: analysisData.map((d) => d.label),
                datasets: [
                    {
                        data: analysisData.map((d)=> d.revenue),
                        borderRadius: 5,
                    }
                ]
                
            }} />
          </div>
          
        );
      })}
    </div>
  )
}


const dataReportAnalysis = [
    {
        id: 1,
        icon: <LuPackage2 />,
        trend: "1.56%",
        trendIcon: <FaArrowTrendUp className="text-green-500" />,
        title: "Total Amount",
        sales: "34,945",
      },
    
      {
        id: 2,
        icon: <FaDollarSign />,
        trend: "1.56%",
        trendIcon: <FaArrowTrendDown className="text-red-500" />,
        title: "Total Revenue",
        sales: "34,945",
      },
    
      {
        id: 3,
        icon: <IoMdCopy />,
        trend: "0.00%",
        trendIcon: <FaArrowTrendUp className="text-gray-300" />,
        title: "Total Customer",
        sales: "34,945",
      },
]