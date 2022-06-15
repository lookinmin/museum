import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, createRoot, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import carData from "../car/carHistory.json";

export const CarInfo = ({ images }) => {
  const [set, reSet] = useState(false);
  const modal = useRef();
  const [modalFlag, setModalFlag] = useState(false);
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
        modal.current.style = "display: block"
        carImg.current.src = "/pic/Car/"+data[num-1].Img;
        var children = carInfo.current.childNodes;
        children[0].innerText = data[num-1].Company;
        children[1].innerText = data[num-1].Year;
        children[2].innerText = data[num-1].Info;
        if (num >= 5) {
          setModalFlag(false);
        } else {
          setModalFlag(true);
        }
      }
    }
  };

  useEffect(() => {
    console.log(carImg.current.src);
  }, [ modalFlag]);

  return (
    <>
      <Canvas gl={{ alpha: false }} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={["#191920"]} />
        <Environment preset="city" />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} modalClick={modalClick} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2000}
              mixBlur={1}
              mixStrength={40}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
            />
          </mesh>
        </group>
      </Canvas>
      <div
        className="text-focus-in"
        ref={modal}
        id={modalFlag ? "modalContainer" : "modalContainer2"}
      >
        <div className="modalWrapper">
          <div className="modalImg">
            <img src="/pic/Car/mainCar.png" alt="" ref={carImg}/>
          </div>
          <div className="modalInfo" ref={carInfo}>
            <div>Car Name</div>
            <div>Year</div>
            <div>Car Info</div>
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
    window.location.href = "/home";
  }, 4000);
  return () => {
    clearTimeout(timer);
  };
};

const ClickFrame = (current, object, setLocation) => {
  setLocation(current === object ? "/car" : "/car/" + object.name);
};

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
  modalClick,
}) {
  const ref = useRef();
  const [, params] = useRoute("/car/:id");
  const [, setLocation] = useLocation();
  var click;
  useEffect(() => {
    click = ref.current.getObjectByName(params?.id);
    if (click) {
      let num = click.parent.num;
      if (num === -1) {
        click.parent.updateWorldMatrix(true, true);
        click.parent.localToWorld(p.set(0, 1.6 / 2, 1.25));
        click.parent.getWorldQuaternion(q);
      } else if (num >= 5) {
        click.parent.updateWorldMatrix(true, true);
        click.parent.localToWorld(p.set(-1, 1.6 / 2, 1.25));
        click.parent.getWorldQuaternion(q);
      } else {
        click.parent.updateWorldMatrix(true, true);
        click.parent.localToWorld(p.set(1, 1.6 / 2, 1.25));
        click.parent.getWorldQuaternion(q);
      }
      modalClick(num);
    } else {
      p.set(0, 0.5, 5.45); //초기 시점 좌표
      modalClick(-2);
    }
  });
  useFrame((state) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
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
          <Frame key={props.url} {...props} />
        ))}
      </group>
    </>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false);
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
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
    <group {...props}>
      <mesh
        name={name}
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
    </group>
  );
}
