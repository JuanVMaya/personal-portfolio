import React, { Suspense } from "react";
import Earth from "../../public/Earth";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Loader from "./Loader";

const HomeInfo = () => {
  return (
    <div className="hero min-h-[calc(100vh-96px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-2xl">
          <Canvas
            camera={{ position: [0, 3, 3], fov: 50, rotation: [1, 1, 0] }}
            className={` flex justify-center items-center bg-transparent hover:cursor-grab`}
          >
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={true} />
            <Suspense fallback={<Loader />}>
              <Earth />
              <ContactShadows
                frames={1}
                scale={5}
                position={[0, -1.0, 0]}
                far={1}
                blur={5}
                opacity={0.5}
                color="#204080"
              />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div>
          <h2 className="py-4 text-2xl text-primary">Hello I'm</h2>
          <h1 className="text-5xl font-bold">
            <span className="bg-slate-200 rounded-md">&nbsp;Juan </span> Jose
            Vanegas Maya
          </h1>
          <p className="py-6">I'm a full stack developer based in Canada 🍁</p>
          <Link to="/about" className="btn btn-primary">
            Check experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
