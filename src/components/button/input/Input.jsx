import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type = "text", variant = "small", ...rest } = props;
  return <input type={type} className={`input ${variant}`} {...rest}></input>;
};

export default Input;
