import React from "react";
import "./GoodsChart.css";
import { Chart } from "react-google-charts";

export const GoodsChart = () => {
  const data = [
    ["Gender", "The Number Of People"],
    ["Male", 640],
    ["Female", 360],
  ];
  const data2 = [
    ["Age Group", "Phone Case", "Cloths", "Accessories"],
    ["Teenager", 1000, 400, 200],
    ["Twenties", 1170, 460, 250],
    ["Thirties", 660, 1120, 300],
    ["Forties", 1030, 540, 350],
    ["Others", 1030, 540, 350],
  ];
  
  const options2 = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  const options = {
    title: "Percentage of Web page users by gender",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="ContactWrapper">
      <h2>Product Chart</h2>
      <Chart
        chartType="PieChart"
        width="900px"
        height="400px"
        data={data}
        options={options}
      />

      <Chart
        chartType="Bar"
        width="900px"
        height="500px"
        data={data2}
        options={options2}
      />
    </div>
  );
};
