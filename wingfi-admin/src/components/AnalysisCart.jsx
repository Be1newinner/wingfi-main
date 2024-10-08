"use client";
import React from "react";
import analysis from "@/offline/dataAnalytics.json"

export default function AnalysisCart() {
  return (
    <div className="flex flex-wrap justify-between">
      {analysis.map((item, index) => {
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
