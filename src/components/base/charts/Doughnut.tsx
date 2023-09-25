"use client"
import { HTMLProps } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps extends HTMLProps<HTMLDivElement> {
  color?: string;
  percent?: number;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  color,
  percent = 0,
}) => {
  const data = {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [percent, 100 - percent],
        backgroundColor: [color, "transparent"],
        borderColor: [color, "transparent"],
        cutout: "85%",
        borderRadius: 10,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};
