"use client"
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useResponsive } from "@/hooks/useResponsive";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
export const MultiChart = () => {
  const { isMobile, isTablet } = useResponsive();

  const data = {
    datasets: [
      {
        type: "line" as const,
        label: "Domain searches",
        borderColor: "#EF466F",
        backgroundColor: "#EF466F",
        borderWidth: 2,
        tension: 0.5,
        fill: false,
        data: [
          8, 8.5, 9, 9.5, 10, 10.5, 10.5, 10, 9.5, 9.5, 10, 10.5, 11, 11.5, 10,
          10, 9, 9, 11, 13, 13, 13, 12, 11, 11, 11, 9, 11, 11, 8, 14, 10, 8,
          8.5, 8.5, 9, 9, 9, 10.5, 11, 11, 13, 13, 14, 13.5, 13, 12.5, 12, 12,
          13, 13, 14, 13, 12, 13, 12, 12.5, 12.5, 12, 10, 14, 14, 14, 11, 13,
          13, 13.5, 11, 9, 14, 8, 13, 9, 11, 9, 9, 13, 13, 8, 14, 8, 14, 10, 11,
          7, 12, 10, 10, 7, 9,
        ],
      },
      {
        type: "bar" as const,
        label: "Searches",
        backgroundColor: "#0060FE",
        borderRadius: 50,
        borderSkipped: false,
        data: [
          3, 1, 2, 4, 6, 1, 4, 9, 2, 8, 12, 9, 2, 7, 3, 6, 4, 2, 11, 9, 10, 9,
          10, 8, 3, 11, 2, 8, 1, 12, 5, 7, 13, 9, 4, 8, 6, 12, 6, 10, 2, 8, 11,
          3, 2, 8, 6, 13, 9, 4, 2, 8, 5, 9, 11, 2, 14, 8, 12, 7, 4, 1, 5, 13, 2,
          6, 11, 9, 2, 10, 8, 7, 12, 14, 9, 3, 6, 9, 13, 4, 9, 2, 8, 10, 6, 1,
          6, 10, 2, 11,
        ],
      },
    ],
  };

  const labels = ["JAN", "FEB", "SEP"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 5,
          color: "rgba(0, 0, 0, 0.38)",
          font: { weight: "bold" },
        },
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          color: "rgba(0, 0, 0, 0.38)",
          //hide labels in small screens
          display: isMobile || isTablet ? false : true,
          font: {
            size: 8,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
      },
      x2: {
        ticks: {
          color: "rgba(0, 0, 0, 0.38)",
        },
        labels,
      },
    },
  }

  return <Chart type="bar" data={data} options={options}/>;
};
