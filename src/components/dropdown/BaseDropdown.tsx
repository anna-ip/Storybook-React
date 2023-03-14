import React from 'react';
import { StyledDropdown, Title, StyledIcon, Menu, DropDownButton, StyledChevron } from './style';
import chevron from '../../assets/icons/chevronDown.svg';

interface BaseDropdownProps {
  toggleDropdown: () => void;
  icon?: string;
  isOpen: boolean;
  children: React.ReactNode;
}

export const BaseDropdown = (props: BaseDropdownProps) => {
  const { toggleDropdown, icon, isOpen, children } = props;

  return (
    <StyledDropdown>
      <DropDownButton onClick={toggleDropdown} isOpen={isOpen}>
        <>
          <StyledIcon src={icon} />
          <Title>David Jonsson</Title>
          <StyledChevron src={chevron} />
        </>
      </DropDownButton>
      <Menu isOpen={isOpen}>{children}</Menu>
    </StyledDropdown>
  );
};
