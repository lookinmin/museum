import React from 'react'
import "./Goods.css";
import { Link, NavLink } from "react-router-dom";

export const GoodsHeader = () => {
  return (
    <div className='HeWrapper'>
      <div className="topBar">
        <NavLink to="/goods" style={{textDecoration: "none", color: "black", display: "flex"}}>
          <h2 id='logo'>Diamonds Shop</h2>
          <img src='./pic/Home/diamond.png' alt='로고' height="24px" />
        </NavLink>
        <img src='./pic/Home/diamond.png' alt='로고' height="60px" id='logoPic'/>
      </div>

      <div className="secondBar">
        <NavLink to="/goods/clothes" title="옷 구매 페이지" className="NavTo">
          <h2 id='goClothes'>Clothes</h2>
        </NavLink>
        
        <NavLink to="/goods/phonecase" title="핸드폰 케이스 구매 페이지" className="NavTo">
          <h2 id='goPhoneCase'>Phone Case</h2>
        </NavLink>
       
        <NavLink to="/goods/accessories" title="악세서리 구매 페이지" className="NavTo">
          <h2 id='goAcces'>Accessories</h2>
        </NavLink>
        
      </div>
    </div>
  )
}
