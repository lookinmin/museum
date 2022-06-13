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
  return (
    <div className='three'>
      <Canvas onClick={(e)=>{console.log(e)}} camera={{ position: [0, 0, -22] }}>
        <Move_camera pos1={pos1} pos2={pos2}/>
        <Door pos1={pos1} pos2={pos2} position={[0,0,10]}/>
        <Ternal />
        <Plane onClick={(e)=>{pos1.current=new THREE.Vector3(0, 0, 50);
        pos2.current=new THREE.Vector3(0, 0, 51);
        setTimeout(() => {
          window.location.href = "/goods"
        }, 2500);}} args={[20, 20]} rotation={[0,Math.PI,0]} position={[0,0,50]} />
      </Canvas>
    </div>

  )
}

// export const Home = () => {
//   const [zoom, setzoom] = useState({
//     transformOrigin: "50% 50%",
//     transform: "perspective(500px) rotateY(0deg) scale(1.3)"
//   });
//   const [carportal,setcarportal]=useState({})
//   const [phoneportal,setphoneportal]=useState({})
//   const is_diif = useRef([0, 0])
//   const is_aning = useRef(true);
//   const [hoverable,sethoverable] = useState(["car_hover","phone_hover"]);
//   const chg_zoom = (e) => {//마우스 위치에 따른 동적인 움직임
//     if (is_aning.current) {
//     }
//     else {
//       var mouse_x = e.clientX / window.innerWidth * 100//마우스 위치 퍼센트로
//       var mouse_y = e.clientY / window.innerHeight * 100
//       var rotate_angle = (mouse_x - 50) / 83.34//y축 기준 회전각 -6~6

//       if (is_diif.current[0] == mouse_x.toFixed(0) && is_diif.current[1] == mouse_y.toFixed(0)) {//x좌표(1) y좌표(1)이 같다면?
//       } else {//둘중 하나라도 바뀐다면 확대지점좌표와 y축 기준 회전각 변환
//         setzoom({
//           transformOrigin: mouse_x.toFixed(1) + "% " + mouse_y.toFixed(1) + "%",
//           transform: "perspective(500px) rotateY(" + rotate_angle + "deg) scale(1.3)",
//           transition: "0.5s"
//         })
//       }
//       is_diif.current = [mouse_x.toFixed(0), mouse_y.toFixed(0)]//움직인인 후의 x좌표와 y좌표를 저장
//     }

//   }
//   const init_zoom = (e) => {//마우스가 브라우저를 벗어나면 확대지점 및 회전각 초기화
//     if (is_aning.current) {
//     } else {
//       if(e.clientX>1800){
//         setzoom({
//           transformOrigin: "50% 50%",
//           transform: "perspective(500px) rotateY(0deg) scale(1.3)",
//           transition: "0.5s"
//         })
//       }
//     }
//   }
//   const end_zoomani = () => {
//     is_aning.current = false;
//     sethoverable(["portal_car","portal_phone"])
//   }
//   const movehall = () => {//굿즈 페이지로 이동
//     if(is_aning.current){

//     }else{
//       setzoom({
//         transformOrigin: "50% 50%",
//         transform: "scale(15)",
//         transition: "5s"
//       })
//       is_aning.current = true;
//       setTimeout(() => {
//         window.location.href = "/goods"
//       }, 2000);
//     }
//   }
//   const enter_portal=(e)=>{//car와 phone 포탈이동
//       var mouse_x = e.clientX / window.innerWidth * 100//마우스 위치 퍼센트로
//       var rotate_angle = (mouse_x - 50)/2 //y축 기준 회전각 -6~6
//       is_aning.current=true
//       if(rotate_angle>0){
//         console.log(rotate_angle)
//         setzoom({
//           transformOrigin: "76% 50%",
//           transform: "perspective(500px) rotateY(10deg) scale(5)",
//           transition: "2s"
//         })
//         setphoneportal({
//           transform: "perspective(500px) rotateY(-30deg) scale(1)",
//           transition: "2s"
//         })
//         setTimeout(() => {
//           window.location.href = "/phone"
//         }, 1300);
//       }else{
//         console.log(rotate_angle)
//         setzoom({
//           transformOrigin: "25.7% 50%",
//           transform: "perspective(500px) rotateY(-10deg) scale(5)",
//           transition: "2s"
//         })
//         setcarportal({
//           transform: "perspective(500px) rotateY(30deg) scale(1)",
//           transition: "2s"
//         })
//         setTimeout(() => {
//           window.location.href = "/car"
//         }, 1300);
//       }
      
//   }
  
//   return (
//     <div onMouseOut={(ec)=>{ init_zoom(ec) }} onMouseMove={(e) => { chg_zoom(e) }} className='homepage'>
//       <div onAnimationEnd={end_zoomani} className='hall' style={zoom}>
//         <div id={hoverable[0]} onClick={(e)=>{enter_portal(e)} } style={carportal}>
//         {/* <div className='sign'>
//           car history
//         </div> */}
//           <div id="inner_car">
//             <img  className='up_portal' src='./pic/Home/door.png' />
//             <img  className='down_portal' src='./pic/Home/door.png' />
//           </div>
//         </div>

//         <div id={hoverable[1]} onClick={(e)=>{enter_portal(e)} } style={phoneportal}>
//           <div id="inner_phone">
//             <img  className='up_portal' src='./pic/Home/door.png' />
//             <img  className='down_portal' src='./pic/Home/door.png' />
//           </div>
//         </div>

//         <div className="toGoods" >
//           <div onClick={movehall} title="자동차 역사관">
//             <img src='./pic/Home/box.png' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
