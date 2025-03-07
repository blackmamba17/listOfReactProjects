import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>{count}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setCount((prevValue) => prevValue + 1);
        }}
      >
        click to update
      </button>
    </>
  );
};

export default ErrorExample;
