import React from "react";
import { Line } from "react-chartjs-2";
import Calendar from "../../molecules/calender";
import "./style.css";

const LineGraph = ({ title, color }) => {
  const data = {
    labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        // label: "High Priority",
        lineTension: 0,
        fill: false,
        borderColor: color,
        data: [12, 25, "", 13, 50, 20, 29, 32, 42],
        pointStyle: "circle",
        pointRadius: 8,
        pointBackgroundColor: [
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
        ],
      },
    ],
  };

  const options = {
    pointStyle: "circle",
    radius: 3,
    bezierCurve: false,
    legend: { display: false },
    // legend: {
    //   labels: { boxWidth: 15, boxHeight: 15, padding: 25 },
    // },
    tooltips: {
      usePointStyle: true,
      callbacks: {
        title: function (labels) {
          return "";
        },
        label: (labels) => {
          return labels.value;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: { display: false },
          ticks: {
            fontSize: 14,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 14,
            beginAtZero: true,

            callback: (label) => {
              if (label % 10 === 0) {
                return label;
              }
            },
          },
        },
      ],
    },
  };

  return (
    <div className="line-chart">
      <div className="chart-head-container">
        <div className="left">
          <h2 className="line-chart-title">{title}</h2>
          <span className="percent">+4.14%</span>
        </div>
        <div className="right">
          <span className="high-priority">
            <span className="legend-box"></span>High Priority
          </span>
          <span className="chart-head-line"></span>
          <Calendar />
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
