import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Holder(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/hang.glb");
  return (
    <group scale={0.8} ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        position={[0, 28.29, 8.22]}
        rotation={[Math.PI / 3, 0, 0]}
      ><meshStandardMaterial roughness={0.2} metalness={1} color="#EEEEEE" ></meshStandardMaterial></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box_1.geometry}
        material={nodes.Box_1.material}
        position={[0, 40, 0]}
        rotation={[-Math.PI / 6, 0, 0]}
        ><meshStandardMaterial roughness={0.2} metalness={1} color="#EEEEEE" ></meshStandardMaterial></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 20, 0]}
        ><meshStandardMaterial roughness={0.2} metalness={1} color="#EEEEEE" ></meshStandardMaterial></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={nodes.Cylinder_1.material}
        ><meshStandardMaterial roughness={0.2} metalness={1} color="#EEEEEE" ></meshStandardMaterial></mesh>
    </group>
  );
}

useGLTF.preload("/hang.glb");