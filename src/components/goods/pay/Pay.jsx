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

  const [card, setCard] = useState("Choose Card Co.");

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
      $(".cardMethod").css("display", "flex");
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
  
  
  }, []);

  const changeCN = (e) => {
    setCard(e);
  }

  $("#btnVoucher").on('click', () => {
    alert("Your Voucher is certified well!");
  })

  $("#payBtn").on('click', () => {
    alert("Thank you for your purchase.");
  })

  $("#deleteItem").on('click', () => {
    window.location.href = `/detail/${id}`;
  })

  const goHome = () => {
    window.location.href = "/goods"
  }

  return (
    <div className='Pwrapper'>
      <div className="Ptop">
        <div className="DlogoContainer" onClick={() => {goHome()}}>
            <h2 id='Dtitle'>Diamonds Shop</h2>
            <img src='../pic/Home/diamond.png' alt='로고' height="24px" style={{marginBottom : "40px"}} />
          </div>
        <h2 id='Ptitle'>Payment Page</h2>
      </div>
    
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

          <div className="cardMethod">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark" variant="outline-secondary" style={{"width" : "200px"}}>
                {card}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item onClick={() => changeCN("KaKao Card")}>KaKao Card</Dropdown.Item>
                <Dropdown.Item onClick={() => changeCN("ShinHan Card")}>ShinHan Card</Dropdown.Item>
                <Dropdown.Item onClick={() => changeCN("WOORI Card")}>WOORI Card</Dropdown.Item>
                <Dropdown.Item onClick={() => changeCN("NH Card")}>NH Card</Dropdown.Item>
                <Dropdown.Item onClick={() => changeCN("IBK Card")}>IBK Card</Dropdown.Item>
                <Dropdown.Item onClick={() => changeCN("KB Card")}>KB Card</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Card Number</InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='ex)1111-2222-3333-4444'/>
            </InputGroup>
          </div>

          <div className="cardMethod">
            <InputGroup className="mb-2" style={{"justifySelf" : "center"}}>
              <InputGroup.Text id="basic-addon3">CVC Number</InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='ex)123'/>
            </InputGroup>

            <InputGroup className="mb-2" style={{"justifySelf" : "center"}}>
              <InputGroup.Text id="basic-addon3">First two digits of Password</InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='ex)12'/>
            </InputGroup>
          </div>
           
          <Button variant="outline-danger" id='payBtn' style={{"justifySelf" : "center", "width" : "200px", "marginTop" : "50px"}}>PAYMENT</Button>
        </div>
        <div id="chooseMe2" className='paymethod'>
          <h2>Account Transfer Payment</h2>
          <InputGroup className="mb-1" style={{"justifySelf" : "center", "width" : "800px"}}>
            <InputGroup.Text>Bank & Your Name</InputGroup.Text>
            <FormControl aria-label="Bank" placeholder='ex) SH Bank' />
            <FormControl aria-label="Name" placeholder="ex) Michael Jackson"/>
          </InputGroup>

          <p style={{"marginTop" : "30px"}}>Where You Send : SH Bank, 1010-1010-0101, Diamonds Co.</p>
        </div>
        <div id="chooseMe3" className='paymethod'>
          <h2>Voucher Payment</h2>

          <p>Please Enter your Voucher Code Number</p>
          <InputGroup className="mb-3" style={{"justifySelf" : "center"}}>
            <FormControl placeholder="ex) 001-356-7749-200"/>
            <Button variant="outline-secondary" id="btnVoucher"> ENTER </Button>
          </InputGroup>
        </div>
      </div>

      <Footer/>
    </div>
  )

  
}
