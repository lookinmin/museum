import React, { Suspense } from 'react'
import { useState } from 'react'
import { Pay } from './pay/Pay';
import { GoodsInner } from './GoodsInner.jsx';
import { Link } from 'react-router-dom';

export const GoodsBody = (props) => {

  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const pic1 = "./pic/Accessories/perfume/Benz/pic1.png";
  const pic2 = "./pic/Accessories/Ring/pic2.png";
  const pic3 = "./pic/PhoneCase/phoneCase/masserati/pic3.png";
  const pic4 = "./pic/clothes/BENZ PK2/pic1.png";
  const pic5 = "./pic/Home/diamond.png";

  const goDetail = (e) => {
    console.log(e);
    window.location.href = `/detail/${e}`
  }

  if(props.props == 0){
    return (
      <div>
        <h2 className='inlineTitle'>Best Products</h2>
          <div className="showcase">
            <Suspense fallback={<h2>is Loading</h2>}>
              <div className="item" id='item1' onMouseOver={() => setPic(pic1)} onMouseOut={() => setPic(pic5)}
                onClick={()=>goDetail("0105")}>
                <img className='itemPic' src={pic1} alt='벤즈 향수'/>
                <div className="itemText">
                  <p className='itemName'>BENZ Man EDT 100ML</p>
                  <p className='itemPrice'>KRW 104,000</p>
                </div>
              </div>
              <div className="item" id='item2' onMouseOver={() => setPic(pic2)} onMouseOut={() => setPic(pic5)}>
                <img className='itemPic' src={pic2} alt='벤츠 반지'/>
                <div className="itemText">
                  <p className='itemName'>BENZ Sliver Ring</p>
                  <p className='itemPrice'>KRW 224,000</p>
                </div>
              </div>
              <div className="item" id='item3' onMouseOver={() => setPic(pic3)} onMouseOut={() => setPic(pic5)}>
                <img className='itemPic' src={pic3} alt='마세라티 폰케이스'/>
                <div className="itemText">
                  <p className='itemName'>MASERATI IPhone Case</p>
                  <p className='itemPrice'>KRW 88,000</p>
                </div>
              </div>
              <div className="item" id='item4' onMouseOver={() => setPic(pic4)} onMouseOut={() => setPic(pic5)}>
                <img className='itemPic' src={pic4} alt='벤츠 PK티'/>
                <div className="itemText">
                  <p className='itemName'>BENZ PK T-shirts</p>
                  <p className='itemPrice'>KRW 99,000</p>
                </div>
              </div>
              <div className="item" id='item5'> 
                <img id='nowItem' src={pic}/>
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
  }
  
  
}
