import React, { Suspense } from 'react'
import { useState } from 'react'
import { Pay } from './pay/Pay';
import { GoodsInner } from './GoodsInner.jsx';
import { Link } from 'react-router-dom';  // 유병주 바보 멍청이 똥개 앙앙앙 사랑해 유병주 2400!! 사랑한다 유병주!! 사랑한다 유병주!!
import { About } from './about/About';    // 야동 그만봐 병주야
import { GoodsChart } from './about/GoodsChart'; // 7주년 축하해 병주야 시은이랑 결혼 꼭 하자...!! 화이팅!!! fighting fighting 


export const GoodsBody = (props) => {
  const [pic, setPic] = useState("./pic/Home/diamond.png");
  const pic1 = "./pic/Accessories/perfume/Ferrari/pic1.png";
  const pic2 = "./pic/Accessories/Ring/pic1.png";
  const pic3 = "./pic/PhoneCase/Lambo/pic3.png";
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
              <div className="item" id='item1' onMouseOver={() => setPic(pic1)} onMouseOut={() => setPic(pic5)}
                onClick={()=>goDetail("0102")}>
                <img className='itemPic' src={pic1} alt='남자 향수'/>
                <div className="itemText">
                  <p className='itemName'>FERRARI For Man 100ml</p>
                  <p className='itemPrice'>KRW 96,000</p>
                </div>
              </div>
              <div className="item" id='item2' onMouseOver={() => setPic(pic2)} onMouseOut={() => setPic(pic5)}
                onClick={()=>goDetail("0105")}>
                <img className='itemPic' src={pic2} alt='벤츠 반지'/>
                <div className="itemText">
                  <p className='itemName'>Mercedes-Benz Silver Ring</p>
                  <p className='itemPrice'>KRW 224,000</p>
                </div>
              </div>
              <div className="item" id='item3' onMouseOver={() => setPic(pic3)} onMouseOut={() => setPic(pic5)}
                onClick={()=>goDetail("0303")}>
                <img className='itemPic' src={pic3} alt='람보르기니 폰케이스'/>
                <div className="itemText">
                  <p className='itemName'>Lamborghini Z-Flip Case</p>
                  <p className='itemPrice'>KRW 32,000</p>
                </div>
              </div>
              <div className="item" id='item4' onMouseOver={() => setPic(pic4)} onMouseOut={() => setPic(pic5)}
                onClick={()=>goDetail("0205")}>
                <img className='itemPic' src={pic4} alt='벤츠 PK티'/>
                <div className="itemText">
                  <p className='itemName'>BENZ PK T-shirts</p>
                  <p className='itemPrice'>KRW 78,000</p>
                </div>
              </div>
              <div className="itemss" id='item5'> 
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
