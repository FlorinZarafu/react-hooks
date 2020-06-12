import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      Object Hook{" "}
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h3>
        Your firstName is {name.firstName} and your lastName is {name.lastName}
      </h3>
    </div>
  );
};
export default HookCounterThree;
