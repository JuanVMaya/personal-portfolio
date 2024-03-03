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
  const amplitude = 0.05;
  const vec = new Vector3();

  useFrame((state, delta) => {
    const distance = state.camera.position.distanceTo(
      ref.current.getWorldPosition(vec)
    );
    // Distance where the marker dissapears
    const range = distance <= 5;
    if (range !== isInRange) setInRange(range);

    if (activeMarker) {
      setBounceTime(bounceTime + delta);
      // Oscillation starting from the half of the scalar distance to the origin
      // Oscillation calculation, also add PI/2 to move the starting positon to -90*
      const oscillation = Math.sin(bounceTime * 3 - Math.PI / 2) * amplitude;
      const newPosition = initialPosition.multiplyScalar(
        markers[text].scalarDistance + oscillation
      ); // New position calculation
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
            <div className="bg-slate-200 left-3 absolute p-1 rounded-md">
              <p className={` font-semibold  text-${markers[text].textColor}`}>
                {markers[text].name}
              </p>
            </div>
          </Html>
        )}
      </Cone>
    </group>
  );
};

export default Marker;
