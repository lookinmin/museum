import React, { useEffect, useState } from 'react'
import "./Goods.css";
import { Link, NavLink, useParams } from "react-router-dom";
import { Footer } from './Footer';
import { GoodsBody } from './GoodsBody';
import $ from 'jquery'

export const Goods = () => {
  const [txtColor1, setTxtColor1] = useState("black");
  const [txtColor2, setTxtColor2] = useState("black");
  const [txtColor3, setTxtColor3] = useState("black");
  const [txtColor4, setTxtColor4] = useState("black");
  const [txtColor5, setTxtColor5] = useState("black");
  const [pageNum, setPageNum] = useState(0);

  let str = window.location.href;
  let resultStr = str.substr(29);

  useEffect(()=>{
    if(resultStr === "clothes"){
      setPageNum(1);
      setTxtColor1("blue")
    }else if(resultStr === "phonecase"){
      setPageNum(2);
      setTxtColor2("blue")
    }else if(resultStr === "accessories"){
      setPageNum(3);
      setTxtColor3("blue")
    }else{
      setPageNum(0);
    }
  }, [resultStr]);

  $('#logoPic').click(()=> {
    window.location = 'http://localhost:3000/';
  })

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
              setTxtColor4("black")
              setTxtColor5("black")
              window.location = '#/'
            }}>
            <h2 id='logo'>Diamonds Shop</h2>
            <img src='./pic/Home/diamond.png' alt='로고' height="24px" />
          </div>
          <img src='./pic/Home/diamond.png' alt='로고' title='Go Home' height="60px" id='logoPic'/>
        </div>

        <div className="secondBar">
          <h2 className="NavTo" id='goClothes' style={{color : txtColor1}} 
            onClick={() => {
            setPageNum(1) 
            setTxtColor1("blue")
            setTxtColor2("black")
            setTxtColor3("black")
            setTxtColor4("black")
            setTxtColor5("black")
            window.location = '#/clothes'}}>Clothes</h2>
          <h2 className="NavTo" id='goPhoneCase' style={{color : txtColor2}} 
            onClick={() => {
              setPageNum(2)
              setTxtColor1("black")
              setTxtColor2("blue")
              setTxtColor3("black")
              setTxtColor4("black")
              setTxtColor5("black")
              window.location = '#/phonecase'}}>Phone Case</h2>
          <h2 className="NavTo" id='goAcces' style={{color : txtColor3}} 
            onClick={() => {
              setPageNum(3)
              setTxtColor1("black")
              setTxtColor2("black") 
              setTxtColor3("blue")
              setTxtColor4("black")
              setTxtColor5("black")
              window.location = '#/accessories'}}>Accessories</h2>
        </div>

        <div className="thirdBar">
          <h2 className="NavTo" id='goAbout' style={{color : txtColor4}} 
              onClick={() => {
              setPageNum(4) 
              setTxtColor1("black")
              setTxtColor2("black")
              setTxtColor3("black")
              setTxtColor4("blue")
              setTxtColor5("black")}}>About</h2>
          <h2 className="NavTo" id='goContact' style={{color : txtColor5}} 
              onClick={() => {
              setPageNum(5) 
              setTxtColor1("black")
              setTxtColor2("black")
              setTxtColor3("black")
              setTxtColor4("black")
              setTxtColor5("blue")}}>Chart</h2>
        </div>
      </div>
      <div className='mainContainer'>
        <GoodsBody props={pageNum}/>
      </div>
      <Footer/>
    </div>
    
  )
}
