import React, { useEffect, useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "./Car.css";

export const Car = () => {
  const car = useRef(null);
  const [left, setLeft] = useState(50);
  const [top, setTop] = useState(300);
  const [angle, setAngle] = useState(0);
  const [dir, setDir] = useState(true);

  const Up = (e) => {
    // console.log("up", e);
  };

  const down = (e) => {
    console.log('dir: ', dir, angle);
    if (dir) {
      var tmpLeft = left + 50;
      var newLeft = tmpLeft + "px";
      setLeft(tmpLeft);
      car.current.style.marginLeft = newLeft;

      var tmpTop = top + 15;
      var newTop = tmpTop + "px";
      setTop(tmpTop);
      car.current.style.top = newTop;

      var tmpAngle = angle + 1;
      var newAngle = `rotate(${tmpAngle}deg)`;
      setAngle(tmpAngle);
      car.current.style.transform = newAngle;

    } else {
      var tmpLeft = left + 50;
      var newLeft = tmpLeft + "px";
      setLeft(tmpLeft);
      car.current.style.marginLeft = newLeft;

      var tmpTop = top - 15;
      var newTop = tmpTop + "px";
      setTop(tmpTop);
      car.current.style.top = newTop;

      var tmpAngle = angle - 1;
      var newAngle = `rotate(${tmpAngle}deg)`;
      setAngle(tmpAngle);

    }
    if (angle >= 14) {
      setDir(false);
      setAngle(0);
      car.current.style.transform = `rotate(${0}deg)`;
    }
    if (angle <= -14) {
      setDir(true);
      setAngle(0);
      car.current.style.transform = `rotate(${0}deg)`;
    }
  };

  useEffect(() => {}, [left]);

  return (
    <>
      <div className="carContainer">
        <ReactScrollWheelHandler upHandler={Up} downHandler={down}>
          <div className="carWrapper">
            <div id="car" ref={car} />
          </div>
        </ReactScrollWheelHandler>
      </div>
    </>
  );
};
