import React from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import AcceData from "../Accessories.json"

export const Detail = () => {

  const filterClo = Object.values(ClothesData);
  const filterCase = Object.values(CaseData);
  const filterAcce = Object.values(AcceData);

  let { id } = useParams();

  var num = parseInt(id)
  var Name, Price, Img1, Img2, Img3, Img4;

  if (num < 200){

  }else if (200 < num < 300){
    let data = filterClo[0].filter((e => e.ID === id))
    console.log(data[0].Name)
  }else{

  }



  return (
    <div>Detail{ num }</div>
  )
}
