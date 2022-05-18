import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import "./Detail.css";
import AcceData from "../Accessories.json"

export const Detail = () => {

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);

  let { id } = useParams();

  var num = parseInt(id)

  useEffect(()=> {
    if (num < 200){
      let data = filterAcce[0].filter((e => e.ID === id))
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
      setImg2(data[0].Img2)
      setImg3(data[0].Img3)
      setImg4(data[0].Img4)
    }else if (200 < num < 300){
      let data = filterClo[0].filter((e => e.ID === id))
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
      setImg2(data[0].Img2)
      setImg3(data[0].Img3)
      setImg4(data[0].Img4)
      console.log(img1)
    }else{
      let data = filterCase[0].filter((e => e.ID === id))
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
      setImg2(data[0].Img2)
      setImg3(data[0].Img3)
      setImg4(data[0].Img4)
    }
  }, []);

  return (
    <div className='DetailWrapper'>

      <div className="topBar">
        <div className="logoContainer">
          <h2>Diamonds Shop</h2>
          <img src='../pic/Home/diamond.png' alt='로고' height="24px" />
        </div>
        
      </div>
      <h2>{Name}</h2>
      <img src={`../${img1}`}/>
    </div>
  )
}
