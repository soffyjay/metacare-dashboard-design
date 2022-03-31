import React, { useEffect } from "react";
import ChartInfoBox from "../../molecules/chartInfobox";
import LineGraph from "../linegraph";
import { swipeHorizontally } from "swipepackage";
import "./style.css";

const Chart = ({ title, color }) => {
  const invokeSlider = () => {
    for (
      let i = 0;
      i < document.getElementsByClassName("chart-container").length;
      i++
    ) {
      swipeHorizontally(
        document.getElementsByClassName("chart-container")[i],
        2
      );
    }
  };

  useEffect(() => {
    invokeSlider();
  }, []);
  return (
    <div className="chart-container">
      <div className="line-chart-graph">
        <LineGraph title={title} color={color} />
      </div>

      <div className="chart-infos">
        <ChartInfoBox />
        <div className="second-box">
          <ChartInfoBox />
        </div>
      </div>
    </div>
  );
};

export default Chart;
