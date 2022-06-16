import React, { Suspense, useRef } from "react";
import {
  RoundedBox,
  MeshReflectorMaterial,
  Environment,
  Stars, Plane
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./Phone.css";
import Model from "./Model";
import Holder from "./Holder";

export const Phone = () => {
  //
  return (
    <div className="three">
      <Cube></Cube>
    </div>
  );
};
function Move_camera({ pos, pos1 }) {
  //카메라 고정
  const p1 = new THREE.Vector3(0, 100, 0);

  useFrame((state, dt) => {
    //화면 프레임에 따라 다름 144hz면 초당 144 60hz면 초당 60번 불림
    state.camera.position.lerp(pos.current, 0.015); //부드러운 화면 카메라 위치 전환
    p1.lerp(pos1.current, 0.015); //부드러운 카메라 표적 위치 변환
    state.camera.lookAt(p1); //카메라 표적 변환
  });
  return null;
}
const Cube = () => {
  const p = new THREE.Vector3(150, 75, 150);
  const temp = useRef();
  const p2 = new THREE.Vector3(0, 100, 0);
  const temp2 = useRef();
  temp.current = p;
  temp2.current = p2;
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ position: [300, 300, 300] }}>
        <Move_camera pos={temp} pos1={temp2} />
        <color attach="background" args={["#191920"]} />
        <ambientLight color="#ffffff" />
        {/*양 옆 빨간색 파란색 조명*/}
        <rectAreaLight
          width={300}
          height={300}
          color={"#ff0000"}
          intensity={300}
          position={[0, 150, 500]}
          lookAt={[0, 0, 0]}
          penumbra={1}
          castShadow
        />
        <rectAreaLight
          width={300}
          height={300}
          color={"#0000ff"}
          intensity={300}
          position={[500, 150, 0]}
          lookAt={[0, 0, 0]}
          penumbra={1}
          castShadow
        />
        {/*기준 거리 이상 뿌옇게 보이기*/}
        <fog attach="fog" args={["#191920", 0, 500]} />
        <Environment preset="city" />
        {/*바닥 mesh*/}
        <mesh
          onDoubleClick={(e) => {
            e.stopPropagation();
            console.log("처음으로");
            temp.current = new THREE.Vector3(150, 75, 150);
            temp2.current = new THREE.Vector3(0, 100, 0);
          }}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[1500, 1000]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
        {/*진열대*/}
        <RoundedBox
          args={[50, 90, 50]}
          radius={5}
          position={[0, 35, 0]}
          smoothness={10}
        >
          <meshStandardMaterial
            roughness={0.2}
            metalness={1}
            color="#ffffff"
          ></meshStandardMaterial>
        </RoundedBox>

        {/*휴대폰 모델, 홀더 모델 불러오기 크기가 크기 때문에 suspense로 걸어둠*/}
        <Suspense fallback={null}>
          <Model
            pos1={temp2}
            pos={temp}
            rotation={[1.05, 0, 0]}
            position={[0, 118.05, -1.2]}
          />
          <Holder position={[0, 80, 0]} />
        </Suspense>
        <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>
      </Canvas>
    </>
  );
};
