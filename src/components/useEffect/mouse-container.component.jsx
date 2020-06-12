import React, { useState } from "react";
import HookMouse from "./run-effects-once.component";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h3>Mouse Container</h3>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookMouse />}
    </div>
  );
};
export default MouseContainer;
