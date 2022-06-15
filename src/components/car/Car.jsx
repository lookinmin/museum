import React from "react";
import "./Car.css";
import { Suspense } from "react";
// import "./styles.css";
import { CarInfo } from "./CarInfo";
export const Car = () => {
  const images = [
    // Back
    {
      position: [-1.15, 0, -1.0],
      rotation: [0, 0, 0],
      url: "./pic/Car/10.tolonado.png",
      name: 4,
      num: 10
    },
    {
      position: [0.0, 0, -1.0],
      rotation: [0, 0, 0],
      url: "./pic/Home/hall.jpg",
      name: -1,
      num: -1
    },
    {
      position: [1.15, 0, -1.0],
      rotation: [0, 0, 0],
      url: "./pic/Car/7.firstdisel.png",
      name: 5,
      num : 7
    },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: "./pic/Car/4.modelA.png",
      name: 3,
      num : 4
    },
    {
      position: [-2.15, 0, 1.4],
      rotation: [0, Math.PI / 2.5, 0],
      url: "./pic/Car/3.fordTmodel.png",
      name: 2,
      num : 3
    },
    {
      position: [-2.5, 0, 2.55],
      rotation: [0, Math.PI / 2.5, 0],
      url: "./pic/Car/2.gasolincar.png",
      name: 1,
      num : 2
    },
    {
      position: [-2.8, 0, 3.7],
      rotation: [0, Math.PI / 2.5, 0],
      url: "./pic/Car/1.qunni.png",
      name: 0,
      num : 1
    },

    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/12.EV1.png",
      name: 6,
      num : 12
    },
    {
      position: [2.15, 0, 1.40],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/13.boltEV.png",
      name: 7,
      num : 13
    },
    {
      position: [2.5, 0, 2.55],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/14.toossanix.png",
      name: 8,
      num : 14
    },
    {
      position: [2.8, 0, 3.7],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/16.nexxo.png",
      name: 9,
      num : 16
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