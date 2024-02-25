import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-500">
        <p>Click on the Vite and React logos to learn more</p>
      </div>
      <button className="btn">This is my button</button>
    </>
  );
}

export default App;
