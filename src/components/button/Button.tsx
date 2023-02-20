import React from "react";
import "./Button.css";

interface IButtonProps {
  onClick: () => void;
  variant?: string,
  children: React.ReactNode,
}

export const Button = (props: IButtonProps) => {
  const { onClick, variant = "primary", children} = props;
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};


