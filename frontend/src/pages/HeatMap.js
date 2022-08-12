import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";

const today = new Date();

function HeatMap() {
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3)
    };
  });
  return (
    <div>
      <CalendarHeatmap
        values={[
          { date: "2022-04-01", count: 1 },
          { date: "2016-01-03", count: 4 },
          { date: "2018-12-06", count: 2 },
          { date: "2017-01-03", count: 4 },
          { date: "2018-12-05", count: 2 }
        ]}
        classForValue={value => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default HeatMap;
