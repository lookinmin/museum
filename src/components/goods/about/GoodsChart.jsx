import React, { useState } from "react";
import "./GoodsChart.css";
import { Chart } from "react-google-charts";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";

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
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
  const options2 = {

    legend: { position: "bottom" },
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
          height="350px"
          data={data2}
          options={options2}
        />
        </div>
      </div>
    </>
  );
};