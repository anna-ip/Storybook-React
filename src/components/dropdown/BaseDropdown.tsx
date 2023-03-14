import React, {PropsWithChildren} from 'react'
import { StyledDropdown, Title, StyledIcon, Menu, DropDownButton, StyledChevron } from './style';
import chevron from '../../assets/icons/chevronDown.svg';

interface BaseDropdownProps {
  toggleDropdown: () => void;
  icon?: string;
  isOpen: boolean;
};

export const BaseDropdown = (props : BaseDropdownProps): PropsWithChildren => {
  const {toggleDropdown, icon, isOpen, children} = props;

  return (
    <StyledDropdown>
      <DropDownButton  onClick={toggleDropdown} isOpen={isOpen} >
        <>
        <StyledIcon src={icon}/>
        <Title>David Jonsson</Title>
        <StyledChevron src={chevron} />
        </>
      </DropDownButton>
        <Menu isOpen={isOpen}>
          {children}
        </Menu>
    </StyledDropdown>
  )
}
