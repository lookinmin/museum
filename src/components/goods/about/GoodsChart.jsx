import React from "react";
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
    title: "Percentage of Web page users by gender",
    pieHole: 0.4,
    is3D: false,
  };

  const Clothedata = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Audi Men's Hooded Windbreaker", 87, 103, 48],
    ["Descent Swiss (Audi) Ski Original Short Down Jacket", 108, 82, 25],
    ["Bentley Jersey",  19, 34, 68],
    ["Benz PK Polo Golf Collar Shirt", 31, 41, 103],
    ["Benz T-Shirt Short-Sleeved", 51, 67, 15],
    ["BMW Men's Hood Tech Short Jacket", 73, 51, 50],
    ["Men’s recycled scuba sweatshirt with Ferrari logo", 51, 67, 15],
    ["Organic cotton T-shirt with Ferrari logo", 82, 93, 68],
    ["Volvo Jersey", 17, 35, 47],
  ];
  const Clotheoptions = {
    chart: {
      title: "Clothes Chart",
      subtitle: "Charted the sales volume of items in the Clothes part",
    },
  };

  const Accessoriesdata = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Benz Men's Perfume MB Man", 83, 103, 44],
    ["Light Essence By Ferrari For Men", 54, 105, 115],
    ["Tonino Lamborghini Invincible EDT", 65, 65, 100],
    ["Bentley Azur EDT", 85, 39, 99],
    ["Mercedes-Benz Ring", 105, 118, 88],
    ["PhoneNum KeyRing", 105, 118, 59],
    ["Benz Las Vegas Key Ring", 73, 85, 59],
    ["Leather Prancing Horse keychain", 1, 85, 32],
    ["Bride Racing Wallet", 17, 47, 2],
    ["Legend Car Logo Wallet", 120, 72, 35],
  ];

  const Accessoriesoptions = {
    chart: {
      title: "Accessories Chart",
      subtitle: "Charted the sales volume of items in the Accessories part",
    },
  };

  const Phonecasedata = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Car Printing Case", 47,97, 5],
    ["F1 Racing Case", 53, 63, 73],
    ["Lamborghini Logo Case", 15, 28, 90],
    ["Korea Independence Case", 110, 158, 170],
    ["Thisisneverthat Case", 102, 130, 11],
    ["Volkswagen Logo Case", 44, 17, 14],
    ["CASETiFY Flip Lettering Case", 106, 115, 89],
    ["CASETiFY S21 Cat Case", 100, 102, 93],
    ["Iphone Case Mac Safe", 109, 111, 14],
    ["CASETiFY Iphone Case", 80, 106, 16],
    ["Iphone Case portrait", 71, 107, 33],
  ];
  const Phonecaseoptions = {
    chart: {
      title: "PhoneCase Performance",
      subtitle: "Charted the sales volume of items in the PhoneCase part",     
    },
  };

  return (
    <Tabs defaultActiveKey={1} id="uncontrolled ">
      <Tab eventKey={1} title="gender">
        <Chart
          chartType="PieChart"
          width="1300px"
          height="500px"
          data={data}
          options={options}
        />
      </Tab>
      <Tab eventKey={2} title="Accessories">
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Accessoriesdata}
          options={Accessoriesoptions}
        />
      </Tab>
      <Tab eventKey={3} title="Phone Case">
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Phonecasedata}
          options={Phonecaseoptions}
        />
      </Tab>
      <Tab eventKey={4} title="Clothes">
      <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Clothedata}
          options={Clotheoptions}
        />
      </Tab>
    </Tabs>
  );
};
