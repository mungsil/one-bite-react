import { useState } from "react";
import Bulb from "./Bulb";

const BulbSwitch = () => {
  const [light, setLight] = useState("OFF"); // state: false, setState: function to change state

  return (
    <div>
      <Bulb light={light} />
      <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
        {light === "ON" ? "불 끄기" : "불 켜기"}
      </button>
    </div>
  );
};

export default BulbSwitch;
