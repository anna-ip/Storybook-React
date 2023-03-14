import React from 'react';
import { StyledBaseButton } from './style';

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger';

interface IButtonProps {
  onClick: () => void;
  variant?: ButtonType;
  children: React.ReactNode;
}

export const BaseButton = (props: IButtonProps) => {
  const { onClick, variant = 'primary', children, ...rest } = props;
  return (
    <StyledBaseButton variant={variant} onClick={onClick} {...rest}>
      {children}
    </StyledBaseButton>
  );
};
