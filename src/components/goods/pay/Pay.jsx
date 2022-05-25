import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from "../Clothes.json"
import CaseData from "../PhoneCase.json"
import AcceData from "../Accessories.json"
import { Footer } from '../Footer';
import "./Pay.css"
import { Button } from 'react-bootstrap'
import $ from 'jquery'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'

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

    $("#me1").on('click', () => {
      $("#default").css("display", "none");
      $("#chooseMe1").css("display", "grid");
      $("#chooseMe2").css("display", "none");
      $("#chooseMe3").css("display", "none");
    })
  
    $("#me2").on('click', () => {
      $("#default").css("display", "none");
      $("#chooseMe1").css("display", "none");
      $("#chooseMe2").css("display", "grid");
      $("#chooseMe3").css("display", "none");
    })
  
    $("#me3").on('click', () => {
      $("#default").css("display", "none");
      $("#chooseMe1").css("display", "none");
      $("#chooseMe2").css("display", "none");
      $("#chooseMe3").css("display", "grid");
    })
  
    $("#btnVoucher").on('click', () => {
      alert("Your Voucher is certified well!");
    })

  
  }, []);


  return (
    <div className='Pwrapper'>
      <h2 id='Ptitle'>Payment Page</h2>
      <div className="Pitem">
        <img id="buyImg" src={`../${img1}`} width="250px"/>
        <div className="description">
          <h2>{Name}</h2>
          <h3>KRW {Price}</h3>
        </div>
        <img id="deleteItem" src="../pic/about/X.png" height="50px" />
      </div>

      <h2 id='SmallTitle'>Choose Payment Method</h2>
      <div className="method">
        <Button variant="outline-secondary" id="me1">Credit Card</Button>
        <Button variant="outline-secondary" id="me2">Account Transfer</Button>
        <Button variant="outline-secondary" id="me3">Voucher</Button>
      </div>

      <div className="showOrder">
        <h2 id='default' style={{color : "lightgray", margin : "200px 0px 150px 0px"}}>( Choose One Method for Payment )</h2>
        <div id="chooseMe1" className='paymethod'>
          <h2>Credit Card Payment</h2>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark" variant="outline-secondary">
              Choose Card Co.
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">KaKao Card</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ShinHan Card</Dropdown.Item>
              <Dropdown.Item href="#/action-3">WooRi Card</Dropdown.Item>
              <Dropdown.Item href="#/action-4">NH Card</Dropdown.Item>
              <Dropdown.Item href="#/action-5">IBK Card</Dropdown.Item>
              <Dropdown.Item href="#/action-6">KB Card</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div id="chooseMe2" className='paymethod'>
          <h2>Account Transfer Payment</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text>Bank & Your Name</InputGroup.Text>
            <FormControl aria-label="Bank" placeholder='ex) SH Bank' />
            <FormControl aria-label="Name" placeholder="ex) Michael Jackson"/>
          </InputGroup>

          <p style={{"marginTop" : "30px"}}>Where You Send : SH Bank, 1010-1010-0101, Diamonds Co.</p>
        </div>
        <div id="chooseMe3" className='paymethod'>
          <h2>Voucher Payment</h2>

          <p>Please Enter your Voucher Code Number</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="ex) 001-356-7749-200"
            />
            <Button variant="outline-secondary" id="btnVoucher">
              ENTER
            </Button>
          </InputGroup>
        </div>
      </div>

      <Footer/>
    </div>
  )

  
}
