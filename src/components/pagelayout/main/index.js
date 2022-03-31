import React from "react";
import MainNavs from "../../organisms/mainnavs";
import ChartHeader from "../../organisms/chartheader";
import Chart from "../../organisms/chart";
import Header from "../header";
import "./style.css";

const Main = () => {
  const chartHeading = [
    "Replies per resolution ",
    "Average resolution time",
    "First contact resolution rate",
  ];
  return (
    <div className="main-container">
      <Header />
      <div className="main-chart">
        <MainNavs />
        <ChartHeader />
        <div className="main-chart-container">
          <Chart title={chartHeading[0]} color={"#F05D23"} />
          <Chart title={chartHeading[1]} color={"#3E68FF"} />
          <Chart title={chartHeading[2]} color={"#07C9E2"} />
        </div>
      </div>
    </div>
  );
};

export default Main;
