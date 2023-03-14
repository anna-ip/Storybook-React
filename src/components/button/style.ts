import styled, { keyframes, css } from 'styled-components';
import { ButtonType } from './BaseButton';

interface StyledBaseButtonProps {
  variant: ButtonType;
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    (props.variant === 'primary' && 'background: blue') ||
    (props.variant === 'secondary' && 'background: grey') ||
    (props.variant === 'success' && 'background: green') ||
    (props.variant === 'danger' && 'background: red')}
`;

const loading = keyframes`
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX( 600px);
  }
`;

interface StyledLoadingButtonProps {
  isLoading: boolean;
  disabled: boolean;
  loadingColor: string;
}

export const StyledLoadingButton = styled(StyledBaseButton)<StyledLoadingButtonProps>`
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  gap: 12px;
  height: 72px;
  width: 200px;
  transform: translateZ(0);
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  background-color: #282828;
  white-space: nowrap;

  // *******  loading line ********
  ::before {
    background-color: rgb(255 255 255 / 10%);
  }

  ::after {
    left: -100%;
    background-color: ${(props) => (props.loadingColor ? props.loadingColor : '#34d297')};
    animation: ${(props) =>
      props.isLoading
        ? css`
            ${loading} 1s infinite linear
          `
        : ''};
  }

  ::before,
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    opacity: ${(props) => (props.isLoading ? 1 : 0)};
    transition: opacity 0.25s;
  }
`;

interface LabelProps {
  isDisabled: boolean;
}

export const Label = styled.span<LabelProps>`
  color: #ffffff;
  transition: 0.125s;
  opacity: ${(props) => (props.isDisabled ? 0.7 : 1)};
`;

const spin = keyframes`
{ 100% {rotate: 1turn;}}
`;

interface LoadingIconProps {
  isLoading: boolean;
  isDisabled: boolean;
}
export const Circle = styled.div<LoadingIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  opacity: ${(props) => (props.isDisabled ? 0.7 : 1)};
  animation: ${(props) =>
    props.isLoading
      ? css`
          ${spin} 0.5s infinite linear
        `
      : ''};
  transition: 0.125s;
`;

export const LoadingIcon = styled.img`
  width: 20px;
  height: 20px;
`;
