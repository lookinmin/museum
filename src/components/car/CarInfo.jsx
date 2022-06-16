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
  Text,
  Sky,
  OrbitControls,

} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import carData from "../car/carHistory.json";
import React from "react";
import Car_model from "./Car_model";


const Car=({carpos})=>{
  const scroll = useScroll()
  const temp=useRef(new THREE.Vector3(0,0,4))
  const tmp=useRef()

  useFrame((state, delta) => {
    tmp.current.position.z=scroll.scroll.current*-36+9
    tmp.current.position.y=0
    tmp.current.position.x=0
    carpos.current=tmp.current.position
  })
  return(
    <group position={[0,-0.5,4]} ref={tmp}>
      <Car_model pos={temp}></Car_model>
    </group>
  );
};

export const CarInfo = ({ images }) => {
  const [set, reSet] = useState(false);
  const modal = useRef();
  const [modalFlag, setModalFlag] = useState(false);
  const car_position = useRef(new THREE.Vector3(0.2, 0.205, 4.1));
  const flag = useRef(true);

  const carTop = useRef();
  const carImg = useRef();
  const carBottom = useRef();
  const data = carData.carHistory;

  const modalClick = (num) => {
    if (!set) {
      reSet(true);
    } else {
      if (num === -2 || num === -1) {
        modal.current.style = "display: none";
      } else {
        modal.current.style = "display: block";
        carImg.current.src = "/pic/Car/" + data[num - 1].Img;
        var top = carTop.current.childNodes;
        var bottom = carBottom.current.childNodes;
        top[0].innerText = data[num-1].Company;
        top[1].innerText = data[num-1].Year;
        bottom[0].innerText = data[num-1].name;
        bottom[1].innerText = data[num-1].Info;
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
      <Canvas
        gl={{ alpha: false }}
        camera={{ fov: 70, position: [0.2, 0.205, 4.1] }}
      >
        <ScrollControls pages={10}>
          <Car carpos={car_position}></Car>
        </ScrollControls>

        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <Environment preset="city" />
        <group position={[0, 0, 0]}>
          <Car_Museum flag={flag} car_position={car_position} images={images} modalClick={modalClick} />

          <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry args={[250, 250]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={3000}
              mixBlur={2}
              mixStrength={15}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
            />
          </mesh>
        </group>
        <Sky distance={500} Inclination={0.495} sunPosition={[1, 0, -1]} mieCoefficient={0.20} mieDirectionalG={0.7} Rayleigh={6} Turbidity={8}  />
      </Canvas>
      <div
        className="text-focus-in"
        ref={modal}
        id={modalFlag ? "modalContainer" : "modalContainer2"}
      >
        <div className="modalWrapper">
          <div className="topWrapper" ref={carTop}>
            <div>HYUNDAI</div>
            <div>2018</div>
          </div>
          <div className="midWrapper">
            <img src="/pic/Car/1.qunni.png" alt="Car Image" ref={carImg}/>
          </div>
          <div className="bottomWrapper" ref={carBottom}>
            <div>NEXXO</div>
            <div>Front wheel drive hydrogen made by HYUNDAI. Concept car unveiled at Geneva Motor Show in 2017</div>
          </div>
        </div>
      </div>
    </>
  );
};
const ToHall = (path, setLocation) => {
  setLocation("/car/" + path);
  const timer = setTimeout(() => {
    setLocation("/car");
    window.location.href = "/";
  }, 2000);
  return () => {
    clearTimeout(timer);
  };
};

const ClickFrame = (current, object, setLocation) => {
  setLocation(current === object ? "/car" : "/car/" + object.name);
};

function Car_Museum({
  images,
  modalClick,
  car_position,
  flag,
}) {
  const ref = useRef();
  const [, params] = useRoute("/car/:id");
  const [, setLocation] = useLocation();
  var click;
  var camera_pos = car_position.current;
  var temp_pos;
  var frame_click = new THREE.Vector3();
  const camerapoint = useRef();
  useEffect(() => {
    click = ref.current.getObjectByName(params?.id);
    if (click) {
      flag.current = false;
      let num = click.parent.num;
      if (num % 2 === 0) {
        frame_click.y = click.parent.position.y + 0.2;
        frame_click.x = click.parent.position.x - 1.5;
        frame_click.z = click.parent.position.z;
      } else {
        frame_click.y = click.parent.position.y + 0.2;
        frame_click.x = click.parent.position.x + 1.5;
        frame_click.z = click.parent.position.z;
      }
      modalClick(num);
    } else {
      flag.current = true;
      camera_pos.set(0.2, 0.205, 4.1); //초기 시점 좌표
      modalClick(-2);
    }
  });
  
  useFrame((state) => {// 화면 자동차에 고정
    if(flag.current){
      camera_pos=car_position.current
      state.camera.position.set(camera_pos.x+0.18,camera_pos.y+0.705,camera_pos.z-0.1)
      temp_pos=new THREE.Vector3(camera_pos.x+0.16,camera_pos.y+0.705,camera_pos.z-0.49)
      
      temp_pos.x=temp_pos.x+state.mouse.x*3
      temp_pos.y=temp_pos.y+state.mouse.y*1
      temp_pos.z=temp_pos.z+Math.abs(state.mouse.x)*3

      state.camera.lookAt(temp_pos);
    }
    else{
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

        {images.map((props) => (
          <Photo_Frame key={props.url} {...props} />
        ))}
      </group>
    </>
  );
}

function Photo_Frame({ url, frame_color = new THREE.Color(), ...props }) {
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
    image.current.material.zoom = 0.6
    frame.current.material.color.lerp(frame_color.set(hovered ? '#151515' : 'white'), 0.1)
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
      <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />

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
        color="#000000"
        font="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff"
      >
        {name}
      </Text>
    </group>
  );
}
