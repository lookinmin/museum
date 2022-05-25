/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,Html } from "@react-three/drei";
import { Innerhtml } from "./innerhtml";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/simple.glb");
  return (
    <group scale={0.4} ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={nodes.Box.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box_1.geometry}
        material={nodes.Box_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={nodes.Cylinder_1.material}
        position={[-16, 0, -37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={nodes.Cylinder_2.material}
        position={[-16, 0, 37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_3.geometry}
        material={nodes.Cylinder_3.material}
        position={[16, 0, 37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_4.geometry}
        material={nodes.Cylinder_4.material}
        position={[16, 0, -37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[0, 2.73, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <Html className='inner_html' position={[0, 0, 0.001]} transform occlude>
          <Innerhtml/>
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