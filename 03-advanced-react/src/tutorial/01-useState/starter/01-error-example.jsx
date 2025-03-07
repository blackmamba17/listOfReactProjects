import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button type="button">click to update the count</button>
    </>
  );
};

export default ErrorExample;
