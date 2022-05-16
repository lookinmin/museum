import React from 'react'
import "./Modal.css";

export const Modal = ({modalClick}) => {
  
  const Click = () =>{
    modalClick();
  }

  return (
    <div className='modalContainer'>
      <div className='modalExit'>
        <img src="/pic/Car/cancel.png" alt="" onClick={Click}/>
      </div>
      <div></div>
    </div>
  )
}
