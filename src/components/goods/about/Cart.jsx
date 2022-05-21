import React from 'react'
import "./Cart.css"


export const Cart = () => {

  const goMenu = () => {
    return(
      window.location.href = `/goods`
    )
  }
  return (
    <div className="CartWrapper">
      <div className="CtopBar">
        <div className="ClogoContainer" onClick={() => {goMenu()}}>
          <h2 id='Ctitle'>Diamonds Shop</h2>
          <img src='../pic/Home/diamond.png' alt='로고' height="24px" style={{marginBottom : "40px"}} />
        </div>
        
        <h3 className='Cmenu' id='DF' onClick={() => goMenu()}>Main</h3>
        <h3 className='Cmenu' onClick={() => goMenu()}>Clothes</h3>
        <h3 className='Cmenu' onClick={() => goMenu()}>Phone Case</h3>
        <h3 className='Cmenu' onClick={() => goMenu()}>Accessories</h3>
      </div>
    </div>
  )
}
