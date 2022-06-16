import React, { useRef } from "react";
import { useGLTF,MeshReflectorMaterial,useScroll } from "@react-three/drei";
import {  useFrame,useThree } from "@react-three/fiber";
import * as THREE from "three";

const move=()=>{
  
  return null
}
export default function Model(props) {
 
  const group = useRef();
  const { viewport } = useThree()
  const { nodes, materials } = useGLTF("/model/car.glb");
  const frame_mat = new THREE.MeshStandardMaterial({ color: "#505050", metalness: 0.8, roughness: 0.4,side:THREE.DoubleSide })//핸드폰 모델 공통 material
  const wheelrubber_mat = new THREE.MeshPhongMaterial({ color: "#ffffff"})//핸드폰 모델 공통 material
  const wheel_mat = new THREE.MeshStandardMaterial({ color: "#c0c0c0",metalness: 0.8, roughness: 0.4})//핸드폰 모델 공통 material
  const mirror = new THREE.MeshPhysicalMaterial({ color: "#ca5caa",metalness: 0.8, roughness: 0.4,transparent:true,opacity:1})//핸드폰 모델 공통 material
  const front=new THREE.MeshStandardMaterial({ color: "#505050",metalness: 0.8, roughness: 0.4,side:THREE.DoubleSide})//핸드폰 모델 공통 material
  const frontmirror=new THREE.MeshStandardMaterial({ color: "a9f0fe",roughness: 0.2,metalness:0.5, transparent:true,opacity:0.3,side:THREE.DoubleSide})//핸드폰 모델 공통 material
  
  return (
    <group  ref={group} {...props} dispose={null}>
      <group rotation={[0,-Math.PI*0.5,0]} scale={0.0006} userData={{ name: "3d-model.obj" }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backbumper.geometry}
          material={frame_mat}
          userData={{ name: "backbumper" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftmirror.geometry}
          userData={{ name: "leftmirror" }}
        >
            <MeshReflectorMaterial
              resolution={2000}
              mixBlur={2}
              mixStrength={50}

              color="#ffffff"
            />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftmirrorframe.geometry}
          material={frame_mat}
          userData={{ name: "leftmirrorframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftdoor.geometry}
          material={frame_mat}
          userData={{ name: "leftdoor" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frontmirroframe.geometry}
          material={front}
          userData={{ name: "frontmirroframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightmirror.geometry}
          material={mirror}
          userData={{ name: "rightmirror" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightmirrorframe.geometry}
          material={frame_mat}
          userData={{ name: "rightmirrorframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightdoor.geometry}
          material={frame_mat}
          userData={{ name: "rightdoor" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightbackdoor.geometry}
          material={frame_mat}
          userData={{ name: "rightbackdoor" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frontmirror.geometry}
          material={frontmirror}
          userData={{ name: "frontmirror" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightbackwheel.geometry}
          material={wheel_mat}
          userData={{ name: "rightbackwheel" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightbackroober.geometry}
          material={wheelrubber_mat}
          userData={{ name: "rightbackroober" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightfrontwheel.geometry}
          material={wheel_mat}
          userData={{ name: "rightfrontwheel" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightfrontroober.geometry}
          material={wheelrubber_mat}
          userData={{ name: "rightfrontroober" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftbackwheel.geometry}
          material={wheel_mat}
          userData={{ name: "leftbackwheel" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftbackroober.geometry}
          material={wheelrubber_mat}
          userData={{ name: "leftbackroober" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftfrontwheel.geometry}
          material={wheel_mat}
          userData={{ name: "leftfrontwheel" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftfrontwheel_1.geometry}
          material={wheelrubber_mat}
          userData={{ name: "leftfrontwheel" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bonnet.geometry}
          material={frame_mat}
          userData={{ name: "bonnet" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightbacklight.geometry}
          material={mirror}
          userData={{ name: "rightbacklight" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightbacklight_inner.geometry}
          material={nodes.rightbacklight_inner.material}
          userData={{ name: "rightbacklight_inner" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftbackboor.geometry}
          material={frame_mat}
          userData={{ name: "leftbackboor" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottomframe.geometry}
          material={frame_mat}
          userData={{ name: "bottomframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftfrontlight.geometry}
          material={mirror}
          userData={{ name: "leftfrontlight" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftfrontlight_inner.geometry}
          material={nodes.leftfrontlight_inner.material}
          userData={{ name: "leftfrontlight_inner" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backframe.geometry}
          material={frame_mat}
          userData={{ name: "backframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightfrontlight.geometry}
          material={mirror}
          userData={{ name: "rightfrontlight" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightfrontlight_inner.geometry}
          material={nodes.rightfrontlight_inner.material}
          userData={{ name: "rightfrontlight_inner" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftbacklight.geometry}
          material={mirror}
          userData={{ name: "leftbacklight" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftbacklight_inner.geometry}
          material={nodes.leftbacklight_inner.material}
          userData={{ name: "leftbacklight_inner" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gril.geometry}
          material={frame_mat}
          userData={{ name: "gril" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frontbumper.geometry}
          material={frame_mat}
          userData={{ name: "frontbumper" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.emblem.geometry}
          material={nodes.emblem.material}
          userData={{ name: "emblem" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frontframe.geometry}
          material={frame_mat}
          userData={{ name: "frontframe" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wholeframe_real.geometry}
          material={frame_mat}
          userData={{ name: "wholeframe_real" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/car.glb");