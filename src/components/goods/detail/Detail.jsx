import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import "./Detail.css";
import AcceData from "../Accessories.json"
import { Footer } from '../Footer';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

export const Detail = () => {

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [exp, setExp] = useState("");
  const [cID, setID] = useState("");

  const [size1, setSize1] = useState("white");
  const [size2, setSize2] = useState("white");
  const [size3, setSize3] = useState("white");
  const [size4, setSize4] = useState("white");
  const [size5, setSize5] = useState("white");

  const [model1, setModel1] = useState("white");
  const [model2, setModel2] = useState("white");
  const [model3, setModel3] = useState("white");

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);

  let { id } = useParams();

  var num = parseInt(id)

  const goPay = (e) =>{
    window.location.href = `/pay/${e}`
  }

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
    if(200 < a && a < 300){
      return(
        <div className="sizeTable">
          <p className='underlineSize'>SIZE</p>
          <div className="sizes">
            <p style={{backgroundColor : size1}} onClick={()=> {
            setSize1("lightgray")
            setSize2("white")
            setSize3("white")
            setSize4("white")
            setSize5("white")}}>XS</p>
            <p style={{backgroundColor : size2}} onClick={()=> {
            setSize1("white")
            setSize2("lightgray")
            setSize3("white")
            setSize4("white")
            setSize5("white")}}>S</p>
            <p style={{backgroundColor : size3}} onClick={()=> {
            setSize1("white")
            setSize2("white")
            setSize3("lightgray")
            setSize4("white")
            setSize5("white")}}>M</p>
            <p style={{backgroundColor : size4}} onClick={()=> {
            setSize1("white")
            setSize2("white")
            setSize3("white")
            setSize4("lightgray")
            setSize5("white")}}>L</p>
            <p style={{backgroundColor : size5}} onClick={()=> {
            setSize1("white")
            setSize2("white")
            setSize3("white")
            setSize4("white")
            setSize5("lightgray")}}>XL</p>
          </div>
        </div>
      )
    }
    else if (300 < a){
      return(
        <div className="choosePhone">
          <p className='underlineSize'>Model</p>
          <div className="models">
            <p style={{backgroundColor : model1}} onClick={()=> {
            setModel1("lightgray")
            setModel2("white")
            setModel3("white")
            }}>Galaxy</p>
            <p style={{backgroundColor : model2}} onClick={()=> {
            setModel1("white")
            setModel2("lightgray")
            setModel3("white")
            }}>IPhone</p>
            <p style={{backgroundColor : model3}} onClick={()=> {
            setModel1("white")
            setModel2("white")
            setModel3("lightgray")
            }}>etc</p>
          </div>
        </div>
      )
    }
  }

  const goMenu = (e) => {
    switch (e){
      case 1:
        return(
          window.location.href = `/goods`
        )
      case 2:
        return(
          window.location.href = `/goods#/clothes`
        )
      case 3:
        return(
          window.location.href = `/goods#/phonecase`
        )
      case 4:
        return(
          window.location.href = `/goods#/accessories`
        )
    }
  }

  const addCart = () => {
    alert(`${Name}'s Link Copied Complete!`);

    navigator.clipboard.writeText(window.location.href);
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
          
          <Carousel variant="dark" style={{width : "450px"}} controls="true">
            <Carousel.Item interval="3000">
              <img className="d-block w-100" src={`../${img1}`}/>
            </Carousel.Item>
            <Carousel.Item interval="3000">
              <img className="d-block w-100" src={`../${img2}`}/>
            </Carousel.Item>
            <Carousel.Item interval="3000">
              <img className="d-block w-100" src={`../${img3}`}/>
            </Carousel.Item>
            <Carousel.Item interval="3000">
              <img className="d-block w-100" src={`../${img4}`}/>
            </Carousel.Item>
          </Carousel>

          <div className="picList">
            <img src={`../${img1}`} width="350px"/>
            <img src={`../${img2}`} width="350px"/>
            <img src={`../${img3}`} width="350px"/>
            <img src={`../${img4}`} width="350px"/>
          </div>
        </div>
        <div className="Dinfo">
          <h2>{Name}</h2>
          <p style={{marginBottom : "40px"}}>KRW {Price}</p>
          {MakeSize(cID)}
          <p style={{marginTop : "40px", borderBottom : "1px solid black", width:"fit-content"}}>Product Explanation</p>
          <p style={{width : "400px"}}>{exp}</p>
          <p style={{marginTop : "40px", borderBottom : "1px solid black", width:"fit-content"}}>BUY</p>
          <Button variant="outline-secondary" className="btnBuy" onClick={()=> goPay(cID)}>BUY NOW</Button>
          <Button variant="outline-secondary" onClick = {() => addCart()}>COPY LINK</Button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
