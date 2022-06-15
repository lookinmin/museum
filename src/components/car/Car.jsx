import React from "react";
import "./Car.css";
import { Suspense } from "react";
// import "./styles.css";
import { CarInfo } from "./CarInfo";
export const Car = () => {
  const images = [
    // Left
    {
      position: [-3, 0, -20.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Home/hall.jpg",
      name: -1,
      num : -1
    },
    {
      position: [-3, 0, -17.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/15.mirai.png",
      name: 15,
      num : 15
    },
    {
      position: [-3, 0, -14.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/13.boltEV.png",
      name: 13,
      num : 13
    },
    {
      position: [-3, 0, -11.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/11.maclarenF1.png",
      name: 11,
      num : 11
    },
    {
      position: [-3, 0, -8.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/9.zensonFF.png",
      name: 9,
      num : 9
    },
    {
      position: [-3, 0, -5.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/7.firstdisel.png",
      name: 7,
      num : 7
    },
    {
      position: [-3, 0, -2.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/5.Rakll.png",
      name: 5,
      num : 5
    },
    {
      position: [-3, 0, 0.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/3.fordTmodel.png",
      name: 3,
      num : 3
    },
    {
      position: [-3, 0, 3.5],
      rotation: [0, Math.PI*0.5, 0],
      url: "./pic/Car/1.qunni.png",
      name: 1,
      num : 1
    },

    // Right
    {
      position: [3, 0, -19],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/16.nexxo.png",
      name: 16,
      num : 16
    },
    {
      position: [3, 0, -16],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/14.toossanix.png",
      name: 14,
      num : 14
    },
    {
      position: [3, 0, -13],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/12.EV1.png",
      name: 12,
      num : 12
    },
    {
      position: [3, 0, -10],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/10.tolonado.png",
      name: 10,
      num : 10
    },
    {
      position: [3, 0, -7],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/8.jeep.png",
      name: 8,
      num : 8
    },
    {
      position: [3, 0, -4],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/6.sitroang.png",
      name: 6,
      num : 6
    },
    {
      position: [3, 0, -1],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/4.modelA.png",
      name: 4,
      num : 4
    },
    {
      position: [3, 0, 2],
      rotation: [0, -Math.PI *0.5, 0],
      url: "./pic/Car/2.gasolincar.png",
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