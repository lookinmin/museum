

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const [effect, isEffect] = useState(true); //나중에 초기값 true로 바꾸기

  useEffect(() => {
    const timer = setTimeout(() => {
      isEffect(false);
    }, 14000);
    return () => clearTimeout(timer);
  }, [effect]);

  return (
    <>
      {effect ? (
        <div className="effectContainer fade-out-box">
          <div style={{background: "black" }}>
            <video
              src="/pic/effect.mp4"
              style={{ width: "100%", height: "937px" }}
              autoPlay
              preload
              muted
            />
          </div>
        </div>
      ) : (
        <div className="background">
          <div className="container">
            <div className="toCar">
              <Link to={"/car"}>
                <img className="doorCar" src="./pic/Home/door.png" />
              </Link>
            </div>
            <div className="toPhone">
              <Link to={"/phone"}>
                <img className="doorCar" src="./pic/Home/door.png" />
              </Link>
            </div>
            <div className="toGoods">
              <Link to={"/goods"}>
                <img className="doorCar" src="./pic/Home/door.png" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
