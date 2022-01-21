import { SiHomebridge } from "react-icons/si";
import { MdThermostat, MdBrightness7, MdWaterDrop } from "react-icons/md"

import Display from "./components/Display";
import TemperatureActuator from "./components/TemperatureActuator";
import LuminosityActuator from "./components/LuminosityActuator"
import WaterBoxActuator from "./components/WaterBoxActuator"

import "./styles/App.css";

function App() {

  const iconSize = 40

  return (
    <div className="app">
      <header>
        <SiHomebridge size={60} color="#55a09f" />
        <h1>Smart Home</h1>
      </header>
      <main>
        <div className="container">
          <div className="info-panel">
            <Display
              icon={<MdThermostat size={iconSize} />}
              title={"Temperatura"}
              value={24}
              color={'#602080'}
            />
            <Display
              icon={<MdBrightness7 size={iconSize} />}
              title={"Luminosidade"}
              value={12}
              color={'#407020'}
            />
            <Display
              icon={<MdWaterDrop size={iconSize} />}
              title={"Nível de água"}
              value={0.8}
              color={'#702050'}
            />
            <TemperatureActuator color={'#803090'} />
            <LuminosityActuator color={'#608030'} />
            <WaterBoxActuator color={'#803060'} />
          </div>
        </div>
      </main>
      <footer>Desenvolvido por @equipe12</footer>
    </div>
  );
}

export default App;
