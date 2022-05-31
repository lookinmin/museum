import React, { Suspense, useRef } from 'react'
import { OrbitControls, SpotLight, RoundedBox, MeshReflectorMaterial, Environment, Cylinder } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import "./Phone.css";
import Model from './Model'
import Holder from './Holder'

export const Phone = () => {

  return (
    <div className='three'>
      <Cube></Cube>
    </div>
  )
}
function Move_camera({pos,pos1}) {
  const p = new THREE.Vector3(150, 75, 150);
  const p1 = new THREE.Vector3(0, 100, 0);
  
  useFrame((state, dt) => {
    state.camera.position.lerp(pos.current, 0.015)
    p1.lerp(pos1.current,0.015);
    state.camera.lookAt(p1);
    
  })
  return null
}
const My_light = () => {
  return (
    <SpotLight position={[0, 300, 0]}
      castShadow
      penumbra={0.1}
      radiusTop={5}
      radiusBottom={100}
      distance={300}
      angle={Math.PI * 0.05}
      attenuation={220}
      anglePower={5}
      intensity={1}
    />
  )
}
const Cube = () => {
  const p = new THREE.Vector3(150, 75, 150);
  const temp=useRef();
  const p2 = new THREE.Vector3(0, 100, 0);
  const temp2=useRef();
  temp.current=p;
  temp2.current=p2;
  return (
    <>
      <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ position: [300, 300, 300] }} >
        <Move_camera pos={temp} pos1={temp2}/>
        {/* <OrbitControls /> */}
        <color attach="background" args={['#191920']} />
        <ambientLight color="#ffffff" />
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
        
        <fog attach="fog" args={['#191920', 0, 500]} />
        <Environment preset="city" />
        {/* <OrbitControls intensity={0} position={[0, 2, 0]} /> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
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
        <RoundedBox args={[50, 90, 50]} radius={5} position={[0, 35, 0]} smoothness={10}>
          <meshStandardMaterial roughness={0.2} metalness={1} color="#ffffff" ></meshStandardMaterial>
        </RoundedBox>

        <Suspense fallback={null}>
          <Model pos1={temp2} pos={temp} rotation={[1.05, 0, 0]} position={[0, 118.05, -1.2]} />
          <Holder position={[0, 80, 0]} />
        </Suspense>

        <axesHelper />
      </Canvas>
    </>
  );
};