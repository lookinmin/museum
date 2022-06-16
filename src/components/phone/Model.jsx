import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { Innerhtml } from "./innerhtml";
import * as THREE from 'three'


export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/simple.glb");
  const phone_material = new THREE.MeshStandardMaterial({ color: "#007cb0", metalness: 0.9, roughness: 0.2 })//핸드폰 모델 공통 material
  return (

    <group onPointerOver={(e) => {
      if (props.pos.current.x > -1) {
        props.pos.current = new THREE.Vector3(0, 132, 18);
        props.pos1.current = new THREE.Vector3(0, 0, -180);
      }
      }} scale={0.4} ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box.geometry}
          material={phone_material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box_1.geometry}
          material={phone_material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={phone_material}
          position={[-16, 0, -37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={phone_material}
          position={[-16, 0, 37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={phone_material}
          position={[16, 0, 37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4.geometry}
          material={phone_material}
          position={[16, 0, -37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          position={[0, 2.73, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
        {/*핸드폰 화면 html으로 구성*/}
        <Html className='inner_html' position={[0, 0, 0.001]} transform occlude={[]}>
          <Innerhtml pos={props.pos} pos1={props.pos1} />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 1, -38]}
      />
    </group>
  );
}

useGLTF.preload("/simple.glb");