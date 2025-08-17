import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const UncontrolledCounter = ({ disabled }) => {
  const [count, setCount] = useState(0); // Internal state (not lifted!)

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterControls
        count={count}
        setCount={setCount}
        disabled={disabled}
      />
    </div>
  );
}
export default UncontrolledCounter;