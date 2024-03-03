import { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

import { Cone, Html } from "@react-three/drei";
import { markers } from "../constants";

const Marker = ({ children, color, text, activeMarker, ...props }) => {
  const ref = useRef();
  const coneRef = useRef();
  const [isInRange, setInRange] = useState(true);
  const isVisible = isInRange;
  const initialPosition = new Vector3(...markers[text].position);
  const [bounceTime, setBounceTime] = useState(0);
  const amplitude = 0.1;
  const vec = new Vector3();

  useFrame((state, delta) => {
    const distance = state.camera.position.distanceTo(
      ref.current.getWorldPosition(vec)
    );
    // Distance where the marker dissapears
    const range = distance <= 6;
    if (range !== isInRange) setInRange(range);
    if (activeMarker) {
      setBounceTime(bounceTime + delta);
      // Oscillation from 1.058 to 1.158, so the midpoint is 1.108, and the range is 0.1
      const oscillation = Math.abs(Math.sin(bounceTime * 3)) * amplitude; // Oscillation calculation
      const newPosition = initialPosition.multiplyScalar(1.058 + oscillation); // New position calculation
      coneRef.current.position.copy(newPosition);
    } else {
      // Reset position when not active
      setBounceTime(0);
      coneRef.current.position.copy(initialPosition);
    }
  });

  return (
    <group ref={ref} {...props}>
      <Cone
        position={[initialPosition.x, initialPosition.y, initialPosition.z]}
        args={[0.1, 0.3]}
        rotation={markers[text].rotation}
        scale={isVisible ? 0.5 : 0.15}
        ref={coneRef}
      >
        <meshStandardMaterial
          color={color}
          opacity={isVisible ? 1 : 0}
          transparent={true} // Ensure transparency is enabled for opacity to work
        />
        {text?.length && activeMarker && (
          <Html>
            <p
              className={`absolute font-semibold left-3 text-${markers[text].textColor}`}
            >
              {markers[text].name}
            </p>
          </Html>
        )}
      </Cone>
    </group>
  );
};

export default Marker;
