import React from 'react'
import "./Car.css";

export const Car = () => {
  return (
    <>
    <div className='carContainer'>

      <div className='car'>
        <img src='pic/Car/mainCar.png' />
      </div>

      <div className='roadSign'>
        <div className='roadSignHead'></div>
        <div className='roadSignBody'></div>
      </div>

    </div>
    </>
  )
}
