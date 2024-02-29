import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { Cone, Html } from "@react-three/drei";
import useMarkerStore from "../stores/marker";

const Marker = ({ children, color, text, ...props }) => {
  const ref = useRef();
  const coneRef = useRef();
  const [isInRange, setInRange] = useState(true);
  const colombiaMarkerActive = useMarkerStore(
    (state) => state.colombiaMarkerActive
  );
  const isVisible = isInRange;
  const initialPosition = new Vector3(0.31, 0.05, 1.01);
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
    if (colombiaMarkerActive) {
      setBounceTime(bounceTime + delta);
      // Oscillation from 1.058 to 1.158, so the midpoint is 1.108, and the range is 0.1
      const oscillation = Math.abs(Math.sin(bounceTime * 3)) * amplitude; // Oscillation calculation
      const direction = initialPosition.clone(); // Direction from origin to initial position, normalized
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
        rotation={[Math.PI / 2, 0, Math.PI * 0.9]}
        scale={isVisible ? 0.5 : 0.15}
        ref={coneRef}
      >
        <meshStandardMaterial
          color={color}
          opacity={isVisible ? 1 : 0}
          transparent={true} // Ensure transparency is enabled for opacity to work
        />
        {text?.length && colombiaMarkerActive && (
          <Html>
            <p className="text-secondary absolute font-semibold left-3">
              {text}
            </p>
          </Html>
        )}
      </Cone>
    </group>
  );
};

export default Marker;
