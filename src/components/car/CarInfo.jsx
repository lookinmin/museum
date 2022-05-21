import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";

const GOLDENRATIO = 1.61803398875;

export const CarInfo = ({ images }) => {
  return (
    <Canvas
      gl={{ alpha: false }}
      camera={{ fov: 70, position: [0, 2, 15] }}
    >
      <color attach="background" args={["#191920"]} />
      <Environment preset="city" />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
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
      </group>
    </Canvas>
  );
};

const ToHall = (path, setLocation) => {
  setLocation("/car/" + path);
  const timer = setTimeout(() => {
    setLocation("/car");
    window.location.href = "/home";
  }, 4500);
  return () => {
    clearTimeout(timer);
  };
};

const ClickFrame = (current, object, setLocation) => {
  setLocation(current === object ? "/car" : "/car/" + object.name);
};

function Frames({images, q = new THREE.Quaternion(), p = new THREE.Vector3()}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/car/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0.5, 5.4); //초기 시점 좌표
    }
  });
  useFrame((state) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        e.object.parent.name === "home"
          ? ToHall(e.object.name, setLocation) //home으로 이동
          : ClickFrame(clicked.current, e.object, setLocation) //클릭한 frame으로 이동
      )}
      onPointerMissed={() => setLocation("/car")}
    >
      {images.map(
        (props) => 
          <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
  useCursor(hovered);
  useFrame((state) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.95 * (hovered ? 0.85 : 1), 
      0.1
    );
    image.current.scale.y = THREE.MathUtils.lerp(
      image.current.scale.y, 
      0.95 * (hovered ? 0.905 : 1),
      0.1
    );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        {/* <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        /> */}
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
