import React from "react";
import "./style.css";

const ChartInfoBox = () => {
  return (
    <div className="chart-info-box">
      <div className="info-container">
        <span className="response-time">Average Response Time</span>
        <span className="mins">30 Mins</span>
      </div>
    </div>
  );
};

export default ChartInfoBox;
