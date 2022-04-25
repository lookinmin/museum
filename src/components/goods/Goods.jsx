import React from 'react'
import "./Goods.css";
import { Link, NavLink } from "react-router-dom";
import { GoodsHeader } from './GoodsHeader';
import { Footer } from './Footer';

export const Goods = () => {
  return (
    <div className="wrapper">
      <GoodsHeader/>
      <div className='container'>
        <h2 id='inlineTitle'>Best Products</h2>
        <div className="showcase">

        </div>
      </div>
      <Footer/>
    </div>
    
  )
}
