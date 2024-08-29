import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import revenueData from "../offline/revenueData.json";
import { useSelector } from "react-redux";
import { selectAnalysis } from "../redux/selectors/analysis";

export default function AnalysisCart() {
  const analysis = useSelector(selectAnalysis);
  return (
    <div className="flex flex-wrap">
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
            <Line
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
            />
          </div>
        );
      })}
    </div>
  );
}
