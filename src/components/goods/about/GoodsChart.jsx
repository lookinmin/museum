import React,{useState} from "react";
import "./GoodsChart.css";
import { Chart } from "react-google-charts";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import{Nav} from "react-bootstrap";

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

  const Clothedata1 = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Audi Men's Hooded Windbreaker", 87, 103, 48],
    ["Descent Swiss (Audi) Ski Original Short Down Jacket", 108, 82, 25],
    ["Bentley Jersey",  19, 34, 68],
    ["Benz PK Polo Golf Collar Shirt", 31, 41, 103],
  ];

  const Clothedata2 =[
    ["Age Group", "18-27", "28-37", "38-47"],
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

  const Accessoriesdata1 = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Benz Men's \nPerfume MB Man", 83, 103, 44],
    ["Light Essence By \nFerrari For Men", 54, 105, 115],
    ["Tonino Lamborghini \nInvincible EDT", 65, 65, 100],
    ["Bentley \nAzur EDT", 85, 39, 99],
    ["Mercedes-Benz \nRing", 105, 118, 88],
  ];
  const Accessoriesdata2 =[
    ["Age Group", "18-27", "28-37", "38-47"],
    ["PhoneNum \nKeyRing", 105, 118, 59],
    ["Benz Las Vegas\n Key Ring", 73, 85, 59],
    ["Leather Prancing \nHorse keychain", 1, 85, 32],
    ["Bride\n Racing Wallet", 17, 47, 2],
    ["Legend Car \nWallet", 120, 72, 35],
  ];

  const Accessoriesoptions = {
    chart: {
      title: "Accessories Chart",
      subtitle: "Charted the sales volume of items in the Accessories part",
    },
  };

  const Phonecasedata1 = [
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Car \nCase", 47,97, 5],
    ["F1 \nRacing Case", 53, 63, 73],
    ["Lamborghini \nCase", 15, 28, 90],
    ["Korea \nIndependence Case", 110, 158, 170],
    ["Thisisneverthat \nCase", 102, 130, 11],

  ];
  const Phonecasedata2 =[
    ["Age Group", "18-27", "28-37", "38-47"],
    ["Volkswagen \nLogo Case", 44, 17, 14],
    ["CASETiFY  \nLettering Case", 106, 115, 89],
    ["CASETiFY  \nCat Case", 100, 102, 93],
    ["Iphone Case \nMac Safe", 109, 111, 14],
    ["CASETiFY \n Case", 80, 106, 16],
    ["Iphone Case \nportrait", 71, 107, 33],
  ];
  const Phonecaseoptions = {
    chart: {
      title: "PhoneCase Performance",
      subtitle: "Charted the sales volume of items in the PhoneCase part",     
    },
  };


  return (
    <Tabs defaultActiveKey={2} id="uncontrolled ">
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
          data={Accessoriesdata1}
          options={Accessoriesoptions}
        />
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Accessoriesdata2}    
        />
      </Tab>

      <Tab eventKey={3} title="Phone Case" >
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Phonecasedata1}
          options={Phonecaseoptions}
        />
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Phonecasedata2}
        />
      </Tab>

      <Tab eventKey={4} title="Clothes">
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Clothedata1}
          options={Clotheoptions}
        />
        <Chart
          chartType="Bar"
          width="1300px"
          height="500px"
          data={Clothedata2}
        />
      </Tab>
    </Tabs>
  //   <Nav className="mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-0" onClick={()=>{TabContent(0)}}>Tab 1</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-1" onClick={()=>{TabContent(1)}}>Tab 2</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-2" onClick={()=>{TabContent(2)}}>Tab 3</Nav.Link>
  //   </Nav.Item>
  // </Nav>

  );
};
