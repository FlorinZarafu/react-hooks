import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const thick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(thick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};
export default IntervalHookCounter;
