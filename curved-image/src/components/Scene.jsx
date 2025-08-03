import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
const Scene = () => {
  return (
    <div className="relative h-screen">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
};

export default Scene;
