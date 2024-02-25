import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center flex-col">
        <div className="w-20 h-20 border-2 border-opacity-20 border-secondary border-dashed rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
