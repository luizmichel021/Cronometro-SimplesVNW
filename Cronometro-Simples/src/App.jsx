import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);
  const [StopInterval,setStopInterval] = useState ()

  const CronometroSimples = () => {
    const Stop = setInterval(() => {
      setNumero((numero) => numero + 1);
    }, 1000);

    setStopInterval (Stop)

  };

  const StopSetInterval = () => clearInterval(StopInterval);

  return (
    <>
      <h1>{numero}</h1>
      <button onClick={CronometroSimples}> Inciar </button>
      <button onClick={StopSetInterval}> Pausar </button>
    </>
  );
}

export default App;
