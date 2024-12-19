import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    count < 0 ? setCount(0) : setCount(count - 1);
  };

  return { count, Increment, Decrement };
};

export { useCounter };
