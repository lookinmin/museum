import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import "./Detail.css";
import AcceData from "../Accessories.json"
import { Footer } from '../Footer';
import { GoodsInner } from '../GoodsInner';
import { GoodsBody } from '../GoodsBody';
import { Button } from 'react-bootstrap';

export const Detail = () => {

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [exp, setExp] = useState("");
  const [cID, setID] = useState("");

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);

  let { id } = useParams();

  var num = parseInt(id)

  useEffect(()=> {
    if (num < 200){
      let data = filterAcce[0].filter((e => e.ID === id))
      setID(data[0].ID);
      setName(data[0].Name);
      setPrice(data[0].Price);
      setImg1(data[0].Img1);
      setImg2(data[0].Img2);
      setImg3(data[0].Img3);
      setImg4(data[0].Img4);
      setExp(data[0].Exp);
    }else if (200 < num && num < 300){
      let data = filterClo[0].filter((e => e.ID === id))
      setID(data[0].ID);
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
      setImg2(data[0].Img2)
      setImg3(data[0].Img3)
      setImg4(data[0].Img4)
      setExp(data[0].Exp);
    }else if(300 < num){
      let data = filterCase[0].filter((e => e.ID === id))
      setID(data[0].ID);
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
      setImg2(data[0].Img2)
      setImg3(data[0].Img3)
      setImg4(data[0].Img4)
      setExp(data[0].Exp);
    }
  }, []);

  const MakeSize = (e) => {
    var a = parseInt(e);
    console.log(a)
    if(200 < a && a < 300){
      return(
        <div className="sizeTable">
          <p id='underlineSize'>SIZE</p>
          <div className="sizes">
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
        </div>
      )
    }
    else{
      return(
        <h2>NO</h2>
      )
    }
  }

  const goMenu = (e) => {
    console.log(e)
    if (e === 1){
      return(
        window.location.href = `/goods`
      )
    }else if(e === 2){
      return(
        window.location.href = `/goods`
      )
    }else if(e === 3){
      return(
        window.location.href = `/goods`
      )
    }else {
      return(
        window.location.href = `/goods`
      )
    }
  }

  return (
    <div className='DetailWrapper'>

      <div className="DtopBar">
        <div className="DlogoContainer" onClick={() => {goMenu(1)}}>
          <h2 id='Dtitle'>Diamonds Shop</h2>
          <img src='../pic/Home/diamond.png' alt='로고' height="24px" style={{marginBottom : "40px"}} />
        </div>
        
        <h3 className='Dmenu' id='DF' onClick={() => goMenu(1)}>Main</h3>
        <h3 className='Dmenu' onClick={() => goMenu(2)}>Clothes</h3>
        <h3 className='Dmenu' onClick={() => goMenu(3)}>Phone Case</h3>
        <h3 className='Dmenu' onClick={() => goMenu(4)}>Accessories</h3>
      </div>

      <div className="Dcontent">
        <div className="Dpic">
          <img src={`../${img1}`} width="400px"/>
        </div>
        <div className="Dinfo">
          <h2>{Name}</h2>
          <p>KRW {Price}</p>
          {MakeSize(cID)}
          <p style={{marginTop : "40px", borderBottom : "1px solid black", width:"fit-content"}}>Product Explanation</p>
          <p>{exp}</p>
          <p style={{marginTop : "40px", borderBottom : "1px solid black", width:"fit-content"}}>BUY</p>
          <Button variant="outline-secondary" className="btnBuy">BUY NOW</Button>
          <Button variant="outline-secondary">ADD TO CART</Button>
        </div>
      </div>
  
     

      <Footer/>
    </div>
  )
}
