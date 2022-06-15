/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

export default function Model(props) {
  
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/door.glb");
  const beam_material = new THREE.MeshStandardMaterial({ color: "#101010", metalness: 0.5, roughness: 0.8 })
  const colorMap = useLoader(TextureLoader, '/pic/Home/pic.png')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -1.5, 0]}>
        <group onClick={(e) => {
          props.pos1.current = new THREE.Vector3(5, 0, 10);
          props.pos2.current = new THREE.Vector3(0, 0, 10);
          console.log("left");
          e.stopPropagation();
          props.is_close.current=true;
        }} position={[-10, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box.geometry}
            material={beam_material}
            position={[0, -4.85, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_2.geometry}
            material={beam_material}
            position={[0, 6.75, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_1.geometry}
            material={beam_material}
            position={[0, 1, -5.25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_3.geometry}
            material={beam_material}
            position={[0, 1, 5.25]}
          />
        </group>
        <group onClick={(e) => {
          props.pos1.current = new THREE.Vector3(-5, 0, 10);
          props.pos2.current = new THREE.Vector3(0, 0, 10);
          console.log("right");
          e.stopPropagation();
          props.is_close.current=true;
        }} position={[10, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_4.geometry}
            material={beam_material}
            position={[0, -4.85, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_6.geometry}
            material={beam_material}
            position={[0, 6.75, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_5.geometry}
            material={beam_material}
            position={[0, 1, -5.25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_7.geometry}
            material={beam_material}
            position={[0, 1, 5.25]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          position={[0, -4.5, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={nodes.Plane_1.material}
          position={[-9.5, 1, 0]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={(e) => {
            if(props.pos1.current.z==10){
              props.pos1.current = new THREE.Vector3(-6, 0, 10);
            props.pos2.current = new THREE.Vector3(-10, 0, 10);
            props.is_close.current=false
            setTimeout(() => {
              window.location.href = "/phone"
            }, 700);
            }
            console.log("left");
            
          }}
          >
          <meshPhongMaterial  map={colorMap}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          position={[9.52, 1, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          
          onClick={(e) => {
            if(props.pos1.current.z==10){
              props.pos1.current = new THREE.Vector3(6, 0, 10);
              props.pos2.current = new THREE.Vector3(10, 0, 10);
              props.is_close.current=false
              setTimeout(() => {
                window.location.href = "/phone"
              }, 700);
            }
            
          }}
        >
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/door.glb");