import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 30px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
