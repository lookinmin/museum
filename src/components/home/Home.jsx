import React from 'react'
import { useState } from 'react';
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';


export const Home = () => {
  const [s1, sets1] = useState({});
  const [s2, sets2] = useState({});


  const changestyle=()=>{
    sets1({
      cursor: "pointer",
      animation: "rotate-center 1.1s linear both",
      animationIterationCount: "infinite",
      animationDelay: 0
    })
    sets2({
      cursor: "pointer",
      animation: "rotate-center 1.0s linear both",
      animationIterationCount: "infinite",
      animationDelay: 0
    })
  }
  
  return (
    <div className='background'>
      <div className='container'>
        {/* <div className="toCar">
          <NavLink to="/car" title="자동차 역사관">
            <img id='doorCar' src='./pic/Home/door.png' />
          </NavLink>
        </div> */}
        <div onMouseOver={changestyle}  className="toPhone">
          <NavLink to="/phone" title="자동차 역사관">
            <img style={s1} className='doorPhone' src='./pic/Home/door.png' />
            <img style={s2} className='doorPhone' src='./pic/Home/door.png' />
          </NavLink>
        </div>
        <div className="toGoods">
          <NavLink to="/goods" title="자동차 역사관">
            <img src='./pic/Home/box.png' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
