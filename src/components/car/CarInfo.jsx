import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Environment,
  Box,
  ScrollControls,
  useScroll,
  OrbitControls,
  Text,
  Stars,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import carData from "../car/carHistory.json";
import React from "react";
import Car_model from "./Car_model";

const extrudeSettings = {
  steps: 2,
  depth: 0.5,
  bevelSize: 0.5,
  bevelOffset: 0,
  bevelEnabled: true,
  bevelSegments: 50,
  bevelThickness: 0.25,
};



const Car=({carpos})=>{
  const scroll = useScroll()
  const temp=useRef(new THREE.Vector3(0,-0.5,4))
  const tmp=useRef()
  useFrame((state, delta) => {
    tmp.current.position.z=scroll.scroll.current*-10+5
    tmp.current.position.y=-0.5
    tmp.current.position.x=0
    carpos.current=tmp.current.position
  })
  return(
    <group position={[0,-0.5,4]} ref={tmp}>
      <Car_model pos={temp}></Car_model>
    </group>
          
  )
}

export const CarInfo = ({ images }) => {
  const [set, reSet] = useState(false);
  const modal = useRef();
  const [modalFlag, setModalFlag] = useState(false);
  const car_position=useRef(new THREE.Vector3(0.2, 0.205, 4.1));
  const flag=useRef(true);

  const carInfo = useRef();
  const carImg = useRef();
  const data = carData.carHistory;

  const modalClick = (num) => {
    if (!set) {
      reSet(true);
    } else {
      if (num === -2 || num === -1) {
        modal.current.style = "display: none";
      } else {
        console.log(carImg.current.src);
        modal.current.style = "display: block";
        carImg.current.src = "/pic/Car/" + data[num - 1].Img;
        console.log(carImg.current.src);
        var children = carInfo.current.childNodes;
        children[0].innerText = data[num - 1].name;
        children[1].innerText = data[num - 1].Company;
        children[2].innerText = data[num - 1].Year;
        children[3].innerText = data[num - 1].Info;
        if (num % 2 === 0) {
          setModalFlag(false);
        } else {
          setModalFlag(true);
        }
      }
    }
  };

  useEffect(() => {
    // console.log(carImg.current.src);
  }, [modalFlag]);
  return (
    <>
      <Canvas gl={{ alpha: false }} camera={{ fov: 70, position: [0.2, 0.205, 4.1] }}>
      <ScrollControls pages={10}>
        <Car carpos={car_position}></Car>  
        </ScrollControls>
        
       <rectAreaLight
          width={10}
          height={10}
          color={"#0000ff"}
          intensity={25}
          position={[-10, 0, 0]}
          lookAt={[0, 0, 0]}
          rotation={[0, Math.PI * -0.5, 0]}
          castShadow
        />
        <rectAreaLight
          width={10}
          height={10}
          color={"#ff0000"}
          intensity={25}
          position={[10, 0, 0]}
          lookAt={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          castShadow
        />
        
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <Environment preset="city" />
        <group position={[0, -0.5, 0]}>
          <Car_Museum flag={flag} car_position={car_position} images={images} modalClick={modalClick} />
          <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2000}
              mixBlur={2}
              mixStrength={15}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
            />
          </mesh>
        </group>
        <Stars />
      </Canvas>
      <div
        className="text-focus-in"
        ref={modal}
        id={modalFlag ? "modalContainer" : "modalContainer2"}
      >
        <div className="modalWrapper">
          <div className="modalImg">
            <img src="/pic/Car/1.qunni.png" alt="" ref={carImg} />
          </div>
          <div className="modalInfo" ref={carInfo}>
            <div>Car Name</div>
            <div>Company</div>
            <div>Year</div>
            <div>Car Info</div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Move_camera=({pos,pos1})=> {//카메라 고정
//   const p1 = new THREE.Vector3(0.18, 0.205, 3.61);
//   useFrame((state)=>{
//     state.camera.lookAt(p1);//카메라 표적 변환
//   })
//   // useFrame((state, dt) => {//화면 프레임에 따라 다름 144hz면 초당 144 60hz면 초당 60번 불림
//   //   // state.camera.position.lerp(pos.current, 0.015)//부드러운 화면 카메라 위치 전환
//   //   p1.lerp(pos1.current,0.015);//부드러운 카메라 표적 위치 변환
    
//   // })
//   return (
    
//   )
// }
const ToHall = (path, setLocation) => {
  setLocation("/car/" + path);
  const timer = setTimeout(() => {
    setLocation("/car");
    window.location.href = "/home";
  }, 4000);
  return () => {
    clearTimeout(timer);
  };
};

const ClickFrame = (current, object, setLocation) => {
  setLocation(current === object ? "/car" : "/car/" + object.name);
};

function Car_Museum({images, q = new THREE.Vector3(0.18, 0.205, 3.61), modalClick, car_position,flag}) {
  const ref = useRef();
  const [, params] = useRoute("/car/:id");
  const [, setLocation] = useLocation();
  var click;
  var camera_pos=car_position.current
  var temp_pos
  var frame_click=new THREE.Vector3();
  const camerapoint=useRef()
  useEffect(() => {
    click = ref.current.getObjectByName(params?.id);
    if (click) {
      flag.current=false;
      let num = click.parent.num;
      console.log(click.parent.position);
      console.log(num);
      if (num % 2 === 0) {
        frame_click.y=click.parent.position.y+0.2
        frame_click.x=click.parent.position.x-1.5
        frame_click.z=click.parent.position.z
        click.parent.updateWorldMatrix(true, true);
        click.parent.localToWorld(temp_pos.set(0,0.8,0));
      } else {
        frame_click.y=click.parent.position.y+0.2
        frame_click.x=click.parent.position.x+1.5
        frame_click.z=click.parent.position.z
        click.parent.updateWorldMatrix(true, true);
        click.parent.localToWorld(temp_pos.set(0,0.8,0));
      }
      modalClick(num);
    } else {
      flag.current=true;
      camera_pos.set(0.2, 0.205, 4.1); //초기 시점 좌표
      modalClick(-2);
    }
  });
  
  useFrame((state) => {
    if(flag.current){
      camera_pos=car_position.current
    // pos1.current.setX(0+state.mouse.x*4)
    // pos1.current.setY(0-state.mouse.y*4)
    state.camera.position.set(camera_pos.x+0.2,camera_pos.y+0.705,camera_pos.z)
    temp_pos=new THREE.Vector3(camera_pos.x+0.18,camera_pos.y+0.705,camera_pos.z-0.49)
    temp_pos.x=temp_pos.x+state.mouse.x*0.75
    temp_pos.y=temp_pos.y+state.mouse.y*0.1
    camerapoint.current.position.set(temp_pos.x,temp_pos.y,temp_pos.z)
    state.camera.lookAt(temp_pos);
    }
    else{
    // state.camera.position.lerp(frame_click, 0.025);
    state.camera.lookAt(temp_pos);
    }

  });
  return (
    <>
      <group
      
        ref={ref}
        onClick={
          (e) =>
            e.object.parent.name === -1
              ? ToHall(e.object.name, setLocation) //home으로 이동
              : ClickFrame(click, e.object, setLocation) //클릭한 frame으로 이동
        }
        onPointerMissed={() => setLocation("/car")}
      >
        <Box args={[0.5,0.5,0.5]} ref={camerapoint} position={temp_pos}>
      <meshBasicMaterial  color={"#ff0000"}></meshBasicMaterial>
    </Box>
        {images.map((props) => (
          <Photo_Frame key={props.url} {...props} />
        ))}
      </group>
    </>
  );
}

function Photo_Frame({ url, ...props }) {
  const [hovered, hover] = useState(false);
  const image = useRef();
  const frame = useRef();
  const uuid = getUuid(url);
  const name = props.data;

  useCursor(hovered);
  useFrame(() => {
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.95 * (hovered ? 0.8 : 1),
      0.1
    );
    image.current.scale.y = THREE.MathUtils.lerp(
      image.current.scale.y,
      0.95 * (hovered ? 0.9 : 1),
      0.1
    );
  });
  return (
    <group rotation={[0, 0, Math.PI * 0.5]} {...props}>
      <mesh
        name={uuid}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={[1, 1.6, 0.05]}
        position={[0, 0.8, 0]}
      >
        <boxGeometry />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.5}
        anchorX="left"
        anchorY="top"
        position={[0.55, 1.6, 0]}
        fontSize={0.08}
        color="#c0c0c0"
      >
        {name}
      </Text>
    </group>
  );
}
