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
    ["Age Group", "Male", "Female"],
    ["Audi Men's Hooded Windbreaker", 87, 103],
    ["Descent Swiss (Audi) Ski Original Short Down Jacket", 108, 82],
    ["Bentley Jersey",  19, 34],
    ["Benz PK Polo Golf Collar Shirt", 31, 41],
  ];

  const Clothedata2 =[
    ["Age Group", "Male", "Female"],
    ["Benz T-Shirt Short-Sleeved", 67, 15],
    ["BMW Men's Hood Tech Short Jacket", 51, 50],
    ["Men’s recycled scuba sweatshirt with Ferrari logo", 67, 15],
    ["Organic cotton T-shirt with Ferrari logo", 68,18],
    ["Volvo Jersey", 17, 35],
  ];

  const Clotheoptions = {
    chart: {
      title: "Clothes Chart",
      subtitle: "Charted the sales volume of items in the Clothes part",
    },
  };

  const Accessoriesdata1 = [
    ["Age Group", "Male", "Female"],
    ["Benz Men's \nPerfume MB Man", 83, 44],
    ["Light Essence By \nFerrari For Men", 105,54,],
    ["Tonino Lamborghini \nInvincible EDT", 65, 65],
    ["Bentley \nAzur EDT", 85, 39],
    ["Mercedes-Benz \nRing", 105, 34],
  ];
  const Accessoriesdata2 =[
    ["Age Group", "Male", "Female"],
    ["PhoneNum \nKeyRing", 105, 59],
    ["Benz Las Vegas\n Key Ring", 73, 59],
    ["Leather Prancing \nHorse keychain", 1, 85],
    ["Bride\n Racing Wallet", 17, 2],
    ["Legend Car \nWallet", 72, 35],
  ];

  const Accessoriesoptions = {
    chart: {
      title: "Accessories Chart",
      subtitle: "Charted the sales volume of items in the Accessories part",
    },
  };

  const Phonecasedata1 = [
    ["Age Group", "Male", "Female"],
    ["Car \nCase", 97, 12],
    ["F1 \nRacing Case", 73, 20],
    ["Lamborghini \nCase", 28, 5],
    ["Korea \nIndependence Case", 88, 87],
    ["Thisisneverthat \nCase", 102, 130],

  ];
  const Phonecasedata2 =[
    ["Age Group", "Male", "Female"],
    ["Volkswagen \nLogo Case", 44, 17],
    ["CASETiFY  \nLettering Case", 106, 89],
    ["CASETiFY  \nCat Case", 100, 93],
    ["Iphone Case \nMac Safe", 109, 111],
    ["CASETiFY \n Case", 80, 46],
    ["Iphone Case \nportrait", 33, 71],
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