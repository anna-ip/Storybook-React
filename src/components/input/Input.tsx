import React, { InputHTMLAttributes } from 'react';
import './Input.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  variant?: string;
  src?: string;
  iconAlt?: string;
  iconClassName?: string;
  label?: string;
  validation?: string;
  isValid?: boolean;
}

export const Input = (props: IInputProps) => {
  const {
    type = 'text',
    variant = 'small',
    src,
    iconAlt,
    iconClassName,
    label,
    isValid,
    validation = '* First name is required',
    ...rest
  } = props;
  return (
    <div className='textbox'>
      {label && <label className='label'>{label}</label>}
      {src ? (
        <>
          <img src={src} alt={iconAlt} className={`icon ${iconClassName}`} />
          <input
            required
            spellCheck='false'
            type={type}
            className={`inputField ${variant} withIcon`}
            {...rest}
          />
        </>
      ) : (
        <input type={type} className={`inputField ${variant}`} {...rest} />
      )}
      <span className='asterix'>*</span>
      {isValid && validation && <div className={`validation ${variant}`}>{validation}</div>}
    </div>
  );
};
