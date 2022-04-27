import React from 'react'
import { useState } from 'react'
import { Clothes } from './clothes/Clothes';
import { Accessories } from './accessories/Accessories';
import { PhoneCase } from './phonecase/PhoneCase';

export const GoodsBody = (props) => {

  const [pic, setPic] = useState("");
  const pic1 = "./pic/Accessories/perfume/Benz/pic1.png";
  const pic2 = "./pic/Accessories/Ring/pic2.png";
  const pic3 = "./pic/PhoneCase/carCase/masserati/pic3.jpg";
  const pic4 = "./pic/clothes/BENZ PK2/A1.jpg";



  if(props.props == 0){
    return (
      <div>
        <h2 id='inlineTitle'>Best Products</h2>
          <div className="showcase">
            <div className="item" id='item1' onMouseOver={() => setPic(pic1)}>
              <img className='itemPic' src={pic1} alt='벤즈 향수'/>
              <div className="itemText">
                <p className='itemName'>BENZ Man EDT 100ML</p>
                <p className='itemPrice'>KRW 104,000</p>
              </div>
            </div>
            <div className="item" id='item2' onMouseOver={() => setPic(pic2)}>
              <img className='itemPic' src={pic2} alt='벤츠 반지'/>
              <div className="itemText">
                <p className='itemName'>BENZ Sliver Ring</p>
                <p className='itemPrice'>KRW 224,000</p>
              </div>
            </div>
            <div className="item" id='item3' onMouseOver={() => setPic(pic3)}>
              <img className='itemPic' src={pic3} alt='마세라티 폰케이스'/>
              <div className="itemText">
                <p className='itemName'>MASERATI IPhone Case</p>
                <p className='itemPrice'>KRW 88,000</p>
              </div>
            </div>
            <div className="item" id='item4' onMouseOver={() => setPic(pic4)}>
              <img className='itemPic' src={pic4} alt='벤츠 PK티'/>
              <div className="itemText">
                <p className='itemName'>BENZ PK T-shirts</p>
                <p className='itemPrice'>KRW 99,000</p>
              </div>
            </div>
            <div className="item" id='item5'> 
              <img id='nowItem' src={pic} alt='item1'/>
            </div>
        
          </div>
      </div>
    )
  }else if(props.props == 1){
    return(
      <Clothes/>
    )
  }else if(props.props == 2){
    return(
      <PhoneCase/>
    )
  }else if(props.props == 3){
    return(
      <Accessories/>
    )
  }
  
  
}
