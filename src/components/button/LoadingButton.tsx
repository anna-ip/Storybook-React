import React from 'react'
import { Circle, LoadingIcon, StyledLoadingButton, Label } from './style';

interface LoadingButtonProps {
  icon: string;
  loadingColor?: string;
  onClick: () => void;
  isLoading: boolean;
}

export const LoadingButton = ({icon, loadingColor, onClick, isLoading}: LoadingButtonProps) => {
 
  return (
    <StyledLoadingButton onClick={onClick} disabled={isLoading} isLoading={isLoading} loadingColor={loadingColor}>
      <Circle isLoading={isLoading} isDisabled={isLoading}><LoadingIcon alt='icon' src={icon}/></Circle>
      <Label isDisabled={isLoading}>{isLoading ? "Reloading   " : "Reload app"}</Label>
    </StyledLoadingButton>
  )
}
