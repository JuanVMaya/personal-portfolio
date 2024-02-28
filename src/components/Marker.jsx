import { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { Cone } from "@react-three/drei";

const Marker = ({ children, color, ...props }) => {
  const ref = useRef();
  const [isInRange, setInRange] = useState(true);
  const isVisible = isInRange;

  const vec = new Vector3();
  useFrame((state) => {
    const distance = state.camera.position.distanceTo(
      ref.current.getWorldPosition(vec)
    );
    // Distance where the marker dissapears
    const range = distance <= 6;
    if (range !== isInRange) setInRange(range);
  });

  return (
    <group ref={ref} {...props}>
      <Cone
        position={[0.31, 0.05, 1.01]}
        args={[0.1, 0.3]}
        rotation={[Math.PI / 2, 0, Math.PI * 0.9]}
        scale={isVisible ? 0.5 : 0.15}
      >
        <meshStandardMaterial
          color={color}
          opacity={isVisible ? 1 : 0}
          transparent={true} // Ensure transparency is enabled for opacity to work
        />
      </Cone>
    </group>
  );
};

export default Marker;
