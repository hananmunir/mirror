/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.glb");
  return (
    <group {...props} dispose={null} scale={0.5}>
      <mesh
        geometry={nodes.Top_low.geometry}
        material={materials.standardSurface1}
        position={[0, 3.5, -2.91]}
        rotation={[-1.74, 0, 0]}
        material-metalness={1}
      />
      <mesh
        geometry={nodes.Bot_low.geometry}
        material={materials.standardSurface1}
        material-metalness={1}
      />
    </group>
  );
}

useGLTF.preload("/scene.glb");

export default Model;
