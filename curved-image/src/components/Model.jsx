import React from "react";

const Model = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 3, 15, 15]} />
      <meshBasicMaterial color={"red"} wireframe={true} />
    </mesh>
  );
};

export default Model;
