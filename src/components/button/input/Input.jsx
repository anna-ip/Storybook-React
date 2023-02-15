import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type = "text", variant = "small",  src, iconAlt, iconClassName, ...rest } = props;
  return (
    <>
      <input type={type} className={`input ${variant}`} {...rest}/>
      {src && <img src={src} alt={iconAlt} className={`icon ${iconClassName}`}/>}
    </>
  )
};

export default Input;
