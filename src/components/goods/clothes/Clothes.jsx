import React from 'react'
import { useState } from 'react';
import "./Clothes.css"
import ClothesData from "./Clothes.json";

export const Clothes = () => {
  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const [itemName, setItemName] = useState("Diamonds Shop");
  const [itemPrice, setItemPrice] = useState("100,000");
  const pic1 = "./pic/Home/diamond.png";

  const filterData = Object.values(ClothesData);

  console.log(filterData[0][0].ID);

  const clothesList = filterData[0].map((item) => {
    return(
      <div className='clItem' onMouseOver={() => {
      setPic(item.Img1)
      setItemName(item.Name)
      setItemPrice(item.Price)}} 
      onMouseOut={() => { 
      setPic(pic1)
      setItemName("Diamonds Shop")
      setItemPrice("100,000")}} 
      key={item.ID}>
        <img className='itemPic' src={item.Img1} alt={item.Name}/>
        <div className="itemText">
          <p className='itemName'>{item.Name}</p>
          <p className='itemPrice'>KRW {item.Price}</p>
        </div>
      </div>
    )
  })


  return (
    <div>
      <h2 className='inlineTitle'>Products : Clothes</h2>
      <div className="clothesShowcase">
        <div className="list">
          {clothesList}
        </div>
        <div className="nowOn">
          <img id='nowItemPic' src={pic}/>
          <div className="itemText">
            <p className='itemName'>{itemName}</p>
            <p className='itemPrice'>KRW {itemPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
