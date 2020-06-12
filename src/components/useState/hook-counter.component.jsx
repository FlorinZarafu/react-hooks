import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>CLick</button>
    </div>
  );
};
export default HookCounter;
