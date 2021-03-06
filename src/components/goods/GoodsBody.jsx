import React, { Suspense } from 'react'
import { useState } from 'react'
import { Pay } from './pay/Pay';
import { GoodsInner } from './GoodsInner.jsx';
import { Link } from 'react-router-dom';  
import { About } from './about/About';    
import { GoodsChart } from './about/GoodsChart'; 

export const GoodsBody = (props) => {
  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const [itemName, setItemName] = useState("Diamonds Shop");
  const pic1 = "./pic/Accessories/perfume/Ferrari/pic1.png";
  const pic2 = "./pic/PhoneCase/Lambo/pic3.png";
  const pic3 = "./pic/Accessories/Ring/pic3.png";
  const pic4 = "./pic/clothes/BENZ PK2/pic1.png";
  const pic5 = "./pic/Home/diamond.png";

  const goDetail = (e) => {
    window.location.href = `/detail/${e}`;
  }

  if(props.props == 0){
    return (
      <div>
        <h2 className='inlineTitle'>Best Products</h2>
          <div className="showcase">
            <Suspense fallback={<h2>is Loading</h2>}>
              <div className="item" id='item1' 
              onMouseOver={() => {
                setPic(pic1)
                setItemName("BENZ Men's EDT 100ml")}} 
              onMouseOut={() => {
                setPic(pic5)
                setItemName("Diamonds")}}
                onClick={()=>goDetail("0102")}>
                <img className='itemPic' src={pic1} alt='남자 향수'/>
                <div className="itemText">
                  <p className='itemName'>FERRARI For Man 100ml</p>
                  <p className='itemPrice'>KRW 96,000</p>
                </div>
              </div>
              <div className="item" id='item2' 
              onMouseOver={() => {
                setPic(pic2)
                setItemName("Lamborghini Z-Flip Case")}} 
              onMouseOut={() => {
                setPic(pic5)
                setItemName("Diamonds")}}
                onClick={()=>goDetail("0303")}>
                <img className='itemPic' src={pic2} alt='람보르기니 폰케이스'/>
                <div className="itemText">
                  <p className='itemName'>Lamborghini Z-Flip Case</p>
                  <p className='itemPrice'>KRW 32,000</p>
                </div>
              </div>
              <div className="item" id='item3' 
              onMouseOver={() => {
                setPic(pic3)
                setItemName("Mercedes-Benz Silver Ring")}} 
              onMouseOut={() => {
                setPic(pic5)
                setItemName("Diamonds")}}
                onClick={()=>goDetail("0105")}>
                <img className='itemPic' src={pic3} alt='반지'/>
                <div className="itemText">
                  <p className='itemName'>Mercedes-Benz Silver Ring</p>
                  <p className='itemPrice'>KRW 224,000</p>
                </div>
              </div>
              <div className="item" id='item4' 
              onMouseOver={() => {
                setPic(pic4)
                setItemName("BENZ PK T-shirts")}} 
              onMouseOut={() => {
                setPic(pic5)
                setItemName("Diamonds")}}
                onClick={()=>goDetail("0205")}>
                <img className='itemPic' src={pic4} alt='벤츠 PK티'/>
                <div className="itemText">
                  <p className='itemName'>BENZ PK T-shirts</p>
                  <p className='itemPrice'>KRW 78,000</p>
                </div>
              </div>
              <div className="itemss" id='item5'> 
                <img id='nowItem' src={pic}/>
                <p className='itemName'>{itemName}</p>
              </div>
            </Suspense>
          </div>
      </div>
    )
  }else if(props.props == 1){
    return(
      <GoodsInner props={props.props}/>
    )
  }else if(props.props == 2){
    return(
      <GoodsInner props={props.props}/>
    )
  }else if(props.props == 3){
    return(
      <GoodsInner props={props.props}/>
    )
  }else if(props.props == 4){
    return (
      <About/>
    )
  }else if(props.props == 5){
    return (
      <GoodsChart/>
    )
  }
}
