import React, { useState } from "react";
import "./GoodsChart.css";
import { Chart } from "react-google-charts";

export const GoodsChart = () => {
  const data = [
    ["Gender", "The Number Of People"],
    ["Male", 640],
    ["Female", 360],
  ];
  const options = {
    pieHole: 0.4,
    is3D: false,
    chartArea : {left:150, top:30, width:"150%", height:'160%'},
  };

  const data2 = [
    ["Month", "Male", "Female"],
    ["JAN", 1000, 400],
    ["FEB", 1170, 460],
    ["MAR", 660, 720],
    ["APR", 530, 940],
    ["MAY", 600, 800],
    ["JUN", 970, 1060],
    ["JUL", 660, 1140],
    ["AUG", 730, 800],
    ["SEP", 900, 670],
    ["OCT", 1170, 550],
    ["NOV", 800, 400],
    ["DEC", 1030, 650],
  ];
  
  const options2 = {
    legend: { position: "bottom" },
    chartArea : {width:"85%", height:"75%"},
  };
  

  return (
    <>
      <div className="pieChartIn">
        <h2>Diamonds User Gender Ratio</h2>
        <Chart
          chartType="PieChart"
          className="circles"
          data={data}
          options={options}
          width="100%"
        />
      </div>
      
      <div className="barChartIn">
        <h2>Gender chart of Entrance</h2>
        <div className="chartContent">
        <Chart
          chartType="LineChart"
          className="lines"
          width="100%"
          height="500px"
          data={data2}
          options={options2}
        />
        </div>
      </div>
    </>
  );
};