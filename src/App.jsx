import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Scene";

function SceneComponent() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
        <directionalLight position={[0, 10, 0]} intensity={0.5} />
        <Environment preset='sunset' />

        <Suspense fallback={null}>
          <Model isOpen={isOpen} />
        </Suspense>

        <OrbitControls
          //autoRotate // If you want to start with rotation
          maxPolarAngle={Math.PI * 0.495}
          rotateSpeed={0.6}
          panSpeed={0.6}
        />
      </Canvas>
      <button className="btn" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}

export default SceneComponent;
