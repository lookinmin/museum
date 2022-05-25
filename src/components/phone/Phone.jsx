import React,{ Suspense,useRef } from 'react'
import { OrbitControls,useHelper,Tetrahedron,Box,MeshReflectorMaterial,Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import "./Phone.css";
import Model from './Model'
import Holder from './Holder'
function Lights() {
  const light = useRef()
  
  return <spotLight angle={Math.PI*0.05} ref={light} position={[0,200,0]} penumbra={0.10}></spotLight>
}

export const Phone = () => {
  const myMesh = useRef()
  // useFrame(() => (myMesh.current.rotation.x += 0.01))
  const Cube = () => {
    return (
      <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 200, 100] }}>
        <color attach="background" args={['#1C0A00']} />
        <Lights/>
        <fog attach="fog" args={['#1C0A00', 0, 500]} />
        <Environment preset="city" />
        <OrbitControls intensity={0} position={[0, 2, 0]}/>
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
            color="#361500"
            metalness={0.5}
          />
        </mesh>
        <Box position={[0,40,0]} args={[40,80,40]}>
          <meshStandardMaterial roughness={0.2} metalness={0.5} color="#603601" ></meshStandardMaterial>
        </Box>
        <Suspense fallback={null}>
          <Model rotation={[1.05,0,0]} position={[0,118.05,-1.2]}/>
          <Holder position={[0,80,0]} />
        </Suspense>

        <axesHelper/>
      </Canvas>
    );
  };
  return (
    <div className='three'>
      <Cube></Cube>
    </div>
  )
}