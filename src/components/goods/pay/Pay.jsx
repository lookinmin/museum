import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import AcceData from "../Accessories.json"
import { Footer } from '../Footer';

export const Pay = () => {

  let { id } = useParams();

  var num = parseInt(id)

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [img1, setImg1] = useState("");

  useEffect(() => {
    if (num < 200){
      let data = filterAcce[0].filter((e => e.ID === id))
      setName(data[0].Name);
      setPrice(data[0].Price);
      setImg1(data[0].Img1);
    }else if (200 < num && num < 300){
      let data = filterClo[0].filter((e => e.ID === id))
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
    }else if(300 < num){
      let data = filterCase[0].filter((e => e.ID === id))
      setName(data[0].Name)
      setPrice(data[0].Price)
      setImg1(data[0].Img1)
    }
  }, []);


  return (
    <div>pay
      <Footer/>
    </div>
  )

  
}
