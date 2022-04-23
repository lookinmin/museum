import React from 'react'
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {


  return (
    <div className='background'>
      <div className='container'>
        <div className="toCar">
          <NavLink to="/car" title="자동차 역사관">
            <img id='doorCar' src='./pic/Home/door.png'/>
          </NavLink>
        </div>
        <div className="toPhone">
          <NavLink to="/phone" title="자동차 역사관">
            <img id='doorPhone' src='./pic/Home/door.png'/>
          </NavLink>
        </div>
        <div className="toGoods">
          <NavLink to="/goods" title="자동차 역사관">
            <img id='doorPhone' src='./pic/Home/box.png'/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
