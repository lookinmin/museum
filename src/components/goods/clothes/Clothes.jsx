import React from 'react'
import { useState } from 'react';
import "./Clothes.css"
import ClothesData from "./Clothes.json";

export const Clothes = () => {
  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const pic1 = "./pic/Home/diamond.png";

  const filterData = Object.values(ClothesData);

  console.log(filterData[0][0].ID);

  const clothesList = filterData[0].map((item) => {
    return(
      <div className='clItem' onMouseOver={() => setPic(item.Img1)} onMouseOut={() => setPic(pic1)} key={item.ID}>
        <img className='itemPic' src={item.Img1} alt='벤즈 향수'/>
        <div className="itemText">
          <p className='itemName'>{item.Name}</p>
          <p className='itemPrice'>{item.Price}</p>
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
        </div>
      </div>
    </div>
  )
}
