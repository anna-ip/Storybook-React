import React, { useState } from 'react';
import {
  Title,
  StyledIcon,
  InnerMenu,
  MainMenu,
  SubMenu,
  MenuButton,
  StyledChevron,
} from './style';
import chevron from '../../assets/icons/chevronDown.svg';
import { BaseDropdown } from './BaseDropdown';

interface DropdownProps {
  toggleDropdown: () => void;
  icon?: string;
  isOpen: boolean;
  mainMenu?: string[];
  subMenu?: string[];
}

export const DropDownWithSubMenu = (props: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleDropdown, icon, isOpen, mainMenu, subMenu } = props;

  return (
    <BaseDropdown isOpen={isOpen} toggleDropdown={toggleDropdown}>
      <InnerMenu open={open}>
        <MainMenu>
          {mainMenu.map((label, index) => (
            <MenuButton key={index} onClick={() => setOpen(!open)}>
              <>
                <StyledIcon src={icon} />
                <Title>{label}</Title>
                <StyledChevron src={chevron} direction='right' />
              </>
            </MenuButton>
          ))}
        </MainMenu>

        <SubMenu isSubMenuOpen={open}>
          {subMenu?.map((subLabel, index) => (
            <MenuButton key={index} onClick={() => setOpen(!open)}>
              <>
                <StyledIcon src={icon} />
                <Title>{subLabel}</Title>
                <StyledChevron src={chevron} direction='left' />
              </>
            </MenuButton>
          ))}
        </SubMenu>
      </InnerMenu>
    </BaseDropdown>
  );
};
