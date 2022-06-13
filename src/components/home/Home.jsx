import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane } from "@react-three/drei";

import "./Home.css";
import Ternal from './Ternal'
import Door from './Door'
import * as THREE from 'three'


function Move_camera({pos1,pos2}) {
  const p1 = new THREE.Vector3(0, 100, 0);
  useFrame((state, dt) => {
    state.camera.position.lerp(pos1.current, 0.02)
    if(pos1.current.z==-22){
      pos1.current.setX(0+state.mouse.x*2)
      pos1.current.setY(0-state.mouse.y*2)
    }
    
    p1.lerp(pos2.current,0.02);
    state.camera.lookAt(p1);
  })
  return null
}
export const Home = () => {
  const p1 = new THREE.Vector3(0, 0, -22);
  const pos1=useRef();
  const p2 = new THREE.Vector3(0, 0, 0);
  const pos2=useRef();
  pos1.current=p1;
  pos2.current=p2;
  const move_init=(pos1,pos2)=>{
    console.log(pos1.current)
    console.log(pos2.current)
    if(pos1.current.z==10){
      console.log("앙")
      // pos1.current = new THREE.Vector3(0, 0, -22);
      // pos2.current = new THREE.Vector3(0, 0, 0);
    }
  }
  return (
    <div className='three'>
      <Canvas camera={{ position: [0, 0, -22] }}>
        <Move_camera pos1={pos1} pos2={pos2}/>
        <Door pos1={pos1} pos2={pos2} position={[0,0,10]}/>
        <Ternal/>
          <Plane onClick={(e)=>{pos1.current=new THREE.Vector3(0, 0, 50);
          pos2.current=new THREE.Vector3(0, 0, 51);
          setTimeout(() => {
            window.location.href = "/goods"
          }, 2500);
          console.log(e)
          }} args={[20, 20]} rotation={[0,Math.PI,0]} position={[0,0,50]} 
        />
      </Canvas>
    </div>

  )
}