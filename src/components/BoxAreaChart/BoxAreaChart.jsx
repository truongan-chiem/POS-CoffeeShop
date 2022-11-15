import React from "react";
import Box from "../Box/Box";
import "./BoxAreaChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler);
const BoxAreaChart = () => {
  const labels = ["11:00am","12:00am","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm"];
  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(112, 67, 50,1)");
          gradient.addColorStop(1, "rgba(112, 67, 50,0.1)");
          return gradient;
        },
        
        borderColor: "#704332",
        data: [0, 60, 100, 156, 120, 110, 55,70,65],
        lineTension: 0.4,
        pointRadius : 0
      }
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 200
      }
    },
    maintainAspectRatio: false
  };
  return (
    <Box className="box-area-chart">
      <h1 className="box-area-chart__header">Daily Sales</h1>

      <Line options={options} data={data} height={60} />
    </Box>
  );
};

export default BoxAreaChart;
