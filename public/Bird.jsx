/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 bird.gltf --transform 
Files: bird.gltf [921.24KB] > C:\Users\juanj\Documents\personal-portfolio\public\bird-transformed.glb [779.52KB] (15%)
Author: Natural History Museum of Los Angeles County (https://sketchfab.com/NHMLA)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-teratorn-teratornis-merriami-cf3b18862d1849168c31f7fd6964c925
Title: Low poly teratorn (Teratornis merriami)
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Bird = (props) => {
  const { currentAnimation } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bird-transformed.glb");
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.Teratorn}
          skeleton={nodes.Object_12.skeleton}
          scale={1}
        />
      </group>
    </group>
  );
};

export default Bird;

useGLTF.preload("/bird-transformed.glb");