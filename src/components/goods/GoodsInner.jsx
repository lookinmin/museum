import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Inner.css"
import ClothesData from "./Clothes.json";
import CaseData from "./PhoneCase.json";
import AcceData from "./Accessories.json";

export const GoodsInner = (props) => {
  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const [itemName, setItemName] = useState("Diamonds Shop");
  const [itemPrice, setItemPrice] = useState("100,000");
  const [itemlist, setItemList] = useState([]);
  const pic1 = "./pic/Home/diamond.png";

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);

  useEffect(()=> {
    if(props.props === 1){
      setItemList(filterClo[0]);
    }
    else if(props.props === 2){
      setItemList(filterCase[0]);
    }
    else{
      setItemList(filterAcce[0]);
    }
  }, [props.props])



  const list = itemlist.map((item)=> {
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
          {list}
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
