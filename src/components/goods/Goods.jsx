import React, { useEffect, useState } from 'react'
import "./Goods.css";
import { Link, NavLink } from "react-router-dom";
import { Footer } from './Footer';
import { GoodsBody } from './GoodsBody';

export const Goods = () => {
  const [txtColor1, setTxtColor1] = useState("white");
  const [txtColor2, setTxtColor2] = useState("white");
  const [txtColor3, setTxtColor3] = useState("white");
  const [txtColor4, setTxtColor4] = useState("white")
  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="wrapper">
      <div className='HeWrapper'>
        <div className="topBar">
          <div id="logoContainer" style={{display: "flex"}} 
            onClick={() => {
              setPageNum(0)
              setTxtColor1("black")
              setTxtColor2("black")
              setTxtColor3("black")
            }}>
            <h2 id='logo'>Diamonds Shop</h2>
            <img src='./pic/Home/diamond.png' alt='로고' height="24px" />
          </div>
          <img src='./pic/Home/diamond.png' alt='로고' height="60px" id='logoPic'/>
        </div>

        <div className="secondBar">
          <h2 className="NavTo" id='goClothes' style={{color : txtColor1}} 
            onClick={() => {
            setPageNum(1) 
            setTxtColor1("blue")
            setTxtColor2("black")
            setTxtColor3("black")}}>Clothes</h2>
          <h2 className="NavTo" id='goPhoneCase' style={{color : txtColor2}} 
            onClick={() => {
              setPageNum(2)
              setTxtColor1("black")
              setTxtColor2("blue")
              setTxtColor3("black")}}>Phone Case</h2>
          <h2 className="NavTo" id='goAcces' style={{color : txtColor3}} 
            onClick={() => {
              setPageNum(3)
              setTxtColor1("black")
              setTxtColor2("black") 
              setTxtColor3("blue")}}>Accessories</h2>
        </div>

        <div className="thirdBar">
          <h2 className="NavTo" id='goAbout' style={{color : txtColor4}} 
              onClick={() => {
              setPageNum(1) 
              setTxtColor1("blue")
              setTxtColor2("black")
              setTxtColor3("black")}}>About</h2>
          <h2 className="NavTo" id='goContact' style={{color : txtColor4}} 
              onClick={() => {
              setPageNum(1) 
              setTxtColor1("blue")
              setTxtColor2("black")
              setTxtColor3("black")}}>Contact</h2>
        </div>
      </div>
      <div className='mainContainer'>
        <GoodsBody props={pageNum}/>
      </div>
      <Footer/>
    </div>
    
  )
}
