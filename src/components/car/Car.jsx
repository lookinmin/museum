import React from "react";
import "./Car.css";
import { Suspense } from "react";
// import "./styles.css";
import { CarInfo } from "./CarInfo";
import carData from "../car/carHistory.json";
export const Car = () => {
  const data = carData.carHistory.map((e) => {
    return e.name;
  })
  const images = [
    // Left
    {
      position: [-3, 0, -20.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Home/hall.jpg",
      data: -1,
      name: -1,
      num : -1
    },
    {
      position: [-3, 0, -17.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/15.mirai.png",
      data: data[14],
      name: 15,
      num : 15
    },
    {
      position: [-3, 0, -14.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/13.boltEV.png",
      data: data[12],
      name: 13,
      num : 13
    },
    {
      position: [-3, 0, -11.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/11.maclarenF1.png",
      data: data[10],
      name: 11,
      num : 11
    },
    {
      position: [-3, 0, -8.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/9.zensonFF.png",
      data: data[8],
      name: 9,
      num : 9
    },
    {
      position: [-3, 0, -5.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/7.firstdisel.png",
      data: data[6],
      name: 7,
      num : 7
    },
    {
      position: [-3, 0, -2.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/5.Rakll.png",
      data: data[4],
      name: 5,
      num : 5
    },
    {
      position: [-3, 0, 0.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/3.fordTmodel.png",
      data: data[2],
      name: 3,
      num : 3
    },
    {
      position: [-3, 0, 3.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/1.qunni.png",
      data: data[0],
      name: 1,
      num : 1
    },

    // Right
    {
      position: [3, 0, -19],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/16.nexxo.png",
      data: data[15],
      name: 16,
      num : 16
    },
    {
      position: [3, 0, -16],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/14.toossanix.png",
      data: data[13],
      name: 14,
      num : 14
    },
    {
      position: [3, 0, -13],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/12.EV1.png",
      data: data[11],
      name: 12,
      num : 12
    },
    {
      position: [3, 0, -10],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/10.tolonado.png",
      data: data[9],
      name: 10,
      num : 10
    },
    {
      position: [3, 0, -7],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/8.jeep.png",
      data: data[7],
      name: 8,
      num : 8
    },
    {
      position: [3, 0, -4],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/6.sitroang.png",
      data: data[5],
      name: 6,
      num : 6
    },
    {
      position: [3, 0, -1],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/4.modelA.png",
      data: data[3],
      name: 4,
      num : 4
    },
    {
      position: [3, 0, 2],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/2.gasolincar.png",
      data: data[1],
      name: 2,
      num : 2
    },
  ];

  return (
    <>
      <div id="CarContainer">
          <Suspense fallback={null} id="CarContainer">
            <CarInfo images={images} />
          </Suspense>
      </div>
    </>
  );
};