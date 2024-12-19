import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count <= 0) {
      return setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  setCount(count - 1);
  return { count, Increment, Decrement };
};

export { useCounter };
