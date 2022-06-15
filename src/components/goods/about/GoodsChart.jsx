import React, { Suspense, useState } from "react";
import "./GoodsChart.css";
import { Chart } from "react-google-charts";

export const GoodsChart = () => {
  const data = [
    ["Gender", "The Number Of People"],
    ["Male", 540],
    ["Female", 460],
  ];
  const options = {
    pieHole: 0.4,
    is3D: false,
    chartArea : {left:150, top:30, width:"150%", height:'160%'},
    slices: [
      {color: "#8D8DAA"},
      {color: "#525E75"}
    ]
  };

  const data3 = [
    ["name", "entrance"],
    ["Car History", 320],
    ["Phone History", 180],
    ["Goods Sales", 550]
  ];
  const options3 = {
    pieHole: 0.4,
    is3D: false,
    chartArea : {left:150, top:30, width:"150%", height:'160%'},
    slices: [
      {color: "#363062"},
      {color: "#827397"},
      {color : "#CDC2AE"}
    ]
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
      <Suspense>
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
        <div className="pieChartIn">
          <div className="chartF">
            <h2>Diamonds User Gender Ratio</h2>
            <Chart
              chartType="PieChart"
              className="circles"
              data={data}
              options={options}
              width="100%"
            />
          </div>
          <div className="chartF">
            <h2>Museum Entrance Ratio</h2>
              <Chart
                chartType="PieChart"
                className="circles"
                data={data3}
                options={options3}
                width="100%"
              />
          </div>
        </div>
      </Suspense>
    </>
  );
};