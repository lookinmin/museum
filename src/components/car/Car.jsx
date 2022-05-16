import React, { useEffect, useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "./Car.css";
import carData from "../car/carHistory.json";
import { Modal } from "./Modal";

export const Car = () => {
  const container = useRef(null);
  const car = useRef(null);
  const [flag, setFlag] = useState(true);
  const [left, setLeft] = useState(0);
  const [carLeft, setCarLeft] = useState(50);
  const history = carData.carHistory;

  const Up = (e) => {
    var tmpLeft = left + 70;
    if(tmpLeft <= 60){
      setLeft(tmpLeft);
      var newLeft = tmpLeft + "px";
      container.current.style.marginLeft = newLeft;
      container.current.style.transitionDuration = "2s";
      var tmpLeft2 = carLeft - 70;
      var newLeft2 = tmpLeft2 + "px";
      setCarLeft(tmpLeft2);
      car.current.style.left = newLeft2;
      car.current.style.transitionDuration = "2s";
      console.log('up', tmpLeft, tmpLeft2);
    }
  };

  const down = (e) => {
    var tmpLeft = left - 70;
    var newLeft = tmpLeft + "px";
    setLeft(tmpLeft);
    container.current.style.marginLeft = newLeft;
    container.current.style.transitionDuration = "2s";

    var tmpLeft2 = carLeft + 70;
    var newLeft2 = tmpLeft2 + "px";
    setCarLeft(tmpLeft2);
    car.current.style.left = newLeft2;
    car.current.style.transitionDuration = "2s";

    console.log('down', tmpLeft, tmpLeft2);
  };

  useEffect(() => {}, [flag]);

  const Click = (e) => {
    if(flag){
      container.current.style.opacity = '0.5'
    }else{
      container.current.style.opacity = '1.0'
    }
    setFlag(!flag);
  };

  const modalClick = () => {
    setFlag(true)
    container.current.style.opacity = '1.0'
  }

  return (
    <>
      <div className="carContainer" ref={container}>
        <ReactScrollWheelHandler upHandler={Up} downHandler={down}>
          <div className="carWrapper">
            <div id="car" ref={car} />
            <div>
              <div className="roadSign roadSign1" value="0" onClick={Click} />
              <div className="roadSign roadSign2" value="1" onClick={Click} />
              <div className="roadSign roadSign3" value="2" onClick={Click} />
              <div className="roadSign roadSign4" value="3" onClick={Click} />
              <div className="roadSign roadSign5" value="4" onClick={Click} />
              <div className="roadSign roadSign6" value="5" onClick={Click} />
              <div className="roadSign roadSign7" value="6" onClick={Click} />
              <div className="roadSign roadSign8" value="7" onClick={Click} />
              <div className="roadSign roadSign9" value="8" onClick={Click} />
              <div className="roadSign roadSign10" value="9" onClick={Click} />
              <div className="roadSign roadSign11" value="10" onClick={Click} />
              <div className="roadSign roadSign12" value="11" onClick={Click} />
              <div className="roadSign roadSign13" value="12" onClick={Click} />
              <div className="roadSign roadSign14" value="13" onClick={Click} />
              <div className="roadSign roadSign15" value="14" onClick={Click} />
              <div className="roadSign roadSign16" value="15" onClick={Click} />
            </div>

          </div>
        </ReactScrollWheelHandler>
      </div>
      {flag ? <div/> : <Modal modalClick={modalClick}/>}
    </>
  );
};
