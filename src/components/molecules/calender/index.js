import React from "react";
import "./style.css";
import { FiCalendar } from "react-icons/fi";

const Calendar = () => {
  return (
    <div className="calendar">
      <span className="calendar-span-one">This Month</span>
      <span className="calendar-span">
        <FiCalendar fontSize={15} />
      </span>
    </div>
  );
};

export default Calendar;
