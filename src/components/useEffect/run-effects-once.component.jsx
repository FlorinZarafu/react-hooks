import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(
      "useEffect called",
      window.addEventListener("mousemove", logMousePosition)
    );
    return () => {
      console.log("component unmounted code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <h3>Hook Mouse</h3>X - {x} <br /> Y - {y}
    </div>
  );
};
export default HookMouse;
