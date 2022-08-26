import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";

// const today = new Date();

function HeatMap() {
  // const randomValues = getRange(200).map(index => {
  //   return {
  //     date: shiftDate(today, -index),
  //     count: getRandomInt(1, 3)
  //   };
  // });
  return (
    <div>
      <CalendarHeatmap
        values={[
          { date: "2022-04-01", count: 1 },
          { date: "2022-04-03", count: 4 },
          { date: "2022-04-04", count: 2 },
          { date: "2022-04-05", count: 2 },
          { date: "2022-04-06", count: 2 },
          { date: "2022-04-07", count: 2 },
          { date: "2022-04-09", count: 2 },
          { date: "2022-04-11", count: 2 },
          { date: "2022-04-12", count: 2 },
          { date: "2022-04-13", count: 2 },
          { date: "2022-04-14", count: 2 },
          { date: "2022-04-16", count: 2 },
          { date: "2022-04-17", count: 2 },
          { date: "2022-04-18", count: 2 },
          { date: "2022-04-19", count: 2 },
          { date: "2022-04-20", count: 2 },
          { date: "2022-04-21", count: 2 },
          { date: "2022-04-22", count: 2 },
          { date: "2022-04-23", count: 2 },
          { date: "2022-04-24", count: 2 },
          { date: "2022-04-27", count: 2 },
          { date: "2022-04-28", count: 2 },

        ]}
        classForValue={value => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
      />
      <ReactTooltip />
    </div>
  );
}

// function shiftDate(date, numDays) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + numDays);
//   return newDate;
// }

// function getRange(count) {
//   return Array.from({ length: count }, (_, i) => i);
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default HeatMap;
