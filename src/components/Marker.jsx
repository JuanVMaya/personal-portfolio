import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { Cone, Html } from "@react-three/drei";
import useMarkerStore from "../stores/marker";
import { useShallow } from "zustand/react/shallow";

const Marker = ({ children, color, text, ...props }) => {
  const ref = useRef();
  const coneRef = useRef();
  const [isInRange, setInRange] = useState(true);
  const colombiaMarkerActive = useMarkerStore(
    (state) => state.colombiaMarkerActive
  );
  const isVisible = isInRange;
  const initialPosY = 1.01;
  const [bounceTime, setBounceTime] = useState(0);

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
      const bounceHeight = Math.abs(Math.sin(bounceTime * 3)) * 0.1;
      coneRef.current.position.z = initialPosY + bounceHeight;
    } else {
      // Reset position when not active
      setBounceTime(0);
      coneRef.current.position.z = initialPosY;
    }
  });

  useEffect(() => {
    console.log("colombiaMarkerActive", colombiaMarkerActive);
  }, [colombiaMarkerActive]);
  return (
    <group ref={ref} {...props}>
      <Cone
        position={[0.31, 0.05, initialPosY]}
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
