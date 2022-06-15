import React, { useEffect, useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "./Car.css";
import carData from "../car/carHistory.json";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";
import { CarInfo } from "./CarInfo";

export const Car = () => {
  const is_diif = useRef([0, 0]);
  const [zoom, setzoom] = useState({
    transformOrigin: "50% 50%",
    transform: "perspective(1000px) rotateY(0deg) scale(1.0)",
  });
  const is_aning = useRef(true);
  const chg_zoom = (e) => {
    //마우스 위치에 따른 동적인 움직임
    if (is_aning.current) {
    } else {
      var mouse_x = (e.clientX / window.innerWidth) * 100; //마우스 위치 퍼센트로
      var mouse_y = (e.clientY / window.innerHeight) * 100;
      var rotate_angle = (mouse_x - 50) / 83.34; //y축 기준 회전각 -6~6

      if (
        is_diif.current[0] == mouse_x.toFixed(0) &&
        is_diif.current[1] == mouse_y.toFixed(0)
      ) {
        //x좌표(1) y좌표(1)이 같다면?
      } else {
        //둘중 하나라도 바뀐다면 확대지점좌표와 y축 기준 회전각 변환
        setzoom({
          transformOrigin: mouse_x.toFixed(1) + "% " + mouse_y.toFixed(1) + "%",
          transform:
            "perspective(500px) rotateY(" + rotate_angle + "deg) scale(1.3)",
          transition: "0.5s",
        });
      }
      is_diif.current = [mouse_x.toFixed(0), mouse_y.toFixed(0)]; //움직인인 후의 x좌표와 y좌표를 저장
    }
  };
  const init_zoom = (e) => {
    //마우스가 브라우저를 벗어나면 확대지점 및 회전각 초기화
    if (is_aning.current) {
    } else {
      if (e.clientX > 1800) {
        setzoom({
          transformOrigin: "50% 50%",
          transform: "perspective(500px) rotateY(0deg) scale(1.3)",
          transition: "0.5s",
        });
      }
    }
  };
  const pexel = (id) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
  const images = [
    // Back
    {
      position: [-1.15, 0, -1.0],
      rotation: [0, 0, 0],
      url: "./pic/Car/13.boltEV.png",
      name: 4,
      num: 13
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
      url: "./pic/Car/6.sitroang.png",
      name: 5,
      num : 6
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
      url: "./pic/Car/7.firstdisel.png",
      name: 6,
      num : 7
    },
    {
      position: [2.15, 0, 1.40],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/8.jeep.png",
      name: 7,
      num : 8
    },
    {
      position: [2.5, 0, 2.55],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "./pic/Car/12.EV1.png",
      name: 8,
      num : 12
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