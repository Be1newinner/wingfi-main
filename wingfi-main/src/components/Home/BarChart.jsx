/** @format */

'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// Replace with your own labels if needed
const labels = ['January', 'February'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'The Dataset',
      data: [65, 59],
      fill: false,
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)'],
      borderWidth: 1,
    },
  ],
};

// Options for horizontal bar chart
const options = {
  indexAxis: 'y', // Set to 'y' to make the bars horizontal
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

export default function BarChart() {
  const textImage = {
    backgroundColor: '#2f8d46',
    backgroundImage:
      'url("https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png")',
    backgroundRepeat: 'repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    WebkitFontSmoothing: 'antialiased',
  };

  return (
    <div className="px-[50px] py-[50px]">
      <div className=" grid lg:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center h-full">
          <Bar data={data} options={options} />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="font-[900] text-[300px]" style={textImage}>
            X6
          </h2>
        </div>
      </div>
    </div>
  );
}
